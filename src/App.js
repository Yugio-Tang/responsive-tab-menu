import React, { useState } from 'react';
import classes             from './App.module.css';
import TabNavBar           from './components/TabNavBar/TabNavBar';
import ScrollDrag          from './components/UI/ScrollDrag';
import TabContent          from './components/TabContent/TabContent';

function App() {
  const [displayCity, setDisplayCity] = useState('tokyo');
  const selectCity = cityId => {
    setDisplayCity(cityId);
  }
  return (
    <section className={classes['main-container']}>
      <ScrollDrag><TabNavBar displayCity={displayCity} onSetCity={selectCity}/></ScrollDrag>
      <TabContent cityId={displayCity}/>
    </section>
  );
}

export default App;
