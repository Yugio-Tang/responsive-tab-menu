import React, { useState } from 'react';
import classes             from './App.module.css';
import TabNavBar           from './components/TabNavBar/TabNavBar';
import ScrollDrag          from './components/UI/ScrollDrag';

function App() {
  const [displayCity, setDisplayCity] = useState('tokyo');
  return (
    <section className={classes['main-container']}>
      <ScrollDrag><TabNavBar displayCity={displayCity}/></ScrollDrag>
    </section>
  );
}

export default App;
