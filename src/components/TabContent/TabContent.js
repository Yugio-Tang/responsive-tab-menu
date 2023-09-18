import React from 'react';
import CITIES from '../TabNavBar/cities';
import classes from './TabContent.module.css';



const TabContent = props => {
    const city      = CITIES.find( city => city.id === props.cityId);
    const imagePath = require(`../../assets/cities/${city.id}.jpg`);

    return (
        <div className={classes['tab-content']}>
        <div className={classes.tab}>
          <div className={classes.row}>
            <div className={classes['left-column']}><img className={classes['img-card']}src={imagePath} alt=""/></div>
            <div className={classes['right-column']}>
                <div className={classes.info}>
                  <h2 className={classes.city}>{city.name}</h2>
                  <div className={classes.description}>
                    <p>{city.description}</p>
                  </div>
                </div>
            </div>
          </div>
          <h1 className={classes.country}>{city.country}</h1>
        </div>
        </div>
    );
}
export default TabContent;

