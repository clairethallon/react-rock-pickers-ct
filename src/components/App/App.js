import React, { useState } from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

function App() {
  let [totalCount, setTotalCount] = useState(0);
  let [pickaxes, setPickaxes] = useState([]);

  let staticPickaxes = ['\u26CF', '\u26CF', '\u26CF'];

  const updateTotalCount = (increment) => {
    setTotalCount(totalCount += increment);
    displayRocks();
  }

      //   // in map:
      // numArray.map( (num)=>{ //num could be taco
      //   if( num % 2 ===0 ){
      //       newArray = [...newArray, num];
      //   }  
      // })
      // console.log( newArray );


  const displayRocks = () => {
    pickaxes = [];
    //totalCount.map( ()=> { //todo - would like to get this working with map instead
    for(let i=0; i<totalCount; i++){
      pickaxes = [...pickaxes, '\u26CF'];//<-pickaxe emoji
    }
    //});
    setPickaxes(pickaxes)
  }

  return (
    <div>
      <header>
        <h1>React Rock Pickers</h1>

        <h2>Total Count: {totalCount}</h2>
        <p>{pickaxes}</p>

        <p>
          "You ain't ever worked a day until you worked a day picking rocks." -
          Mike Schlangen
        </p>
      </header>

      <h3>Luke</h3>

      <RockCounter changeCountTACO={updateTotalCount} />

      <h3>JJ</h3>
      <RockCounter changeCountTACO={updateTotalCount} />

      <h3>Sam</h3>
      <RockCounter changeCountTACO={updateTotalCount} />

      <h3>Pete</h3>
      <RockCounter changeCountTACO={updateTotalCount} />
    </div>
  );
}

export default App;
