import React, { useState, useRef } from 'react';

const ScrollDrag = props => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX]         = useState(0);  
  const [scrollX, setScrollX]         = useState(0);
  const ref                           = useRef(null);

  const onMouseDown = event => {
    setIsScrolling(true);
    setClientX(event.clientX);
    setScrollX(ref.current.scrollLeft);
  };
  const onMouseUp   = ()    => {
    setIsScrolling(false);

  };
  const onMouseMove = event => {
    if (isScrolling) {
        const moveX = event.clientX - clientX;
        ref.current.scrollLeft = scrollX - moveX;
    }
  };
  return (
    <div onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
        {React.cloneElement(props.children, {ref: ref})}
    </div>
  )

}

export default ScrollDrag;

