import React, { useState, useRef, useEffect } from 'react';
import CITIES            from './cities';
import classes           from './TabNavBar.module.css';
const TabNavBar = React.forwardRef( (props, ref) => {
    
    const [hideLeftArrow ,  setHideLeftArrow  ] = useState(true);
    const [hideRightArrow,  setHideRightArror ] = useState(false);
    // const tabMenuRef = useRef(null);
    const scroll = scrollOffest => {
        ref.current.scrollLeft += scrollOffest;         
    };
    useEffect( ()=> {
        const handleScroll = () => {
            const scrollLeftValue = ref.current.scrollLeft;
            const scrollableWidth = ref.current.scrollWidth - ref.current.clientWidth;
            // hide left arrow or right arrow: 
            scrollLeftValue > 0 ?                setHideLeftArrow(false)  : setHideLeftArrow(true) ;
            scrollableWidth > scrollLeftValue ?  setHideRightArror(false) : setHideRightArror(true);
        };
        ref.current.addEventListener('scroll', handleScroll);
        return () => {
            ref.current.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const cities = CITIES.map( city => 
            <li className={`${classes['tab-btn']} ${props.displayCity === city.id ?classes.active : ""}`} key={city.id}>
                {city.name}
            </li>
        );
    return (
        <div className={classes['tab-navigation']}>
          <div className={classes['tab-nav-bar']} >
            {!hideLeftArrow && <img className={classes['left-arrow']} 
                 src="https://api.iconify.design/uil/angle-left.svg?color=white" 
                 alt="scroll left"
                 onClick={ () =>  scroll(-200)}></img>}
            {!hideRightArrow && <img className={classes['right-arrow']} 
                 src="https://api.iconify.design/uil/angle-right.svg?color=white" 
                 alt="scroll right"
                 onClick={ () =>  scroll( 200)}></img>}
              <ul className={classes['tab-menu'] } ref={ref} >
                  {cities}
              </ul>
          </div>
        </div>
    );
}); 
export default TabNavBar;