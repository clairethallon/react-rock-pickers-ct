import React, { useState } from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

function App() {
  let [totalCount, setTotalCount] = useState(0); // set var for total Count of rocks
  let [pickaxes, setPickaxes] = useState([]); // set var for pickaxes emoji array

  // create function to calculate rocks picked total to display on DOM
  const updateTotalCount = (increment) => {
    // set totalCount = (totalCount +/- increment) to get the total count of Rocks Picked
    setTotalCount(totalCount += increment); 
    displayRocks(); //update pickaxe emoji array
  }

      //   // in map:
      // numArray.map( (num)=>{ //num could be taco
      //   if( num % 2 ===0 ){
      //       newArray = [...newArray, num];
      //   }  
      // })
      // console.log( newArray );


  // function to create array of pickaxe emojis to display on DOM
  const displayRocks = () => {
    pickaxes = []; // empty out emoji array
    //totalCount.map( ()=> { //todo - would like to get this working with map instead
    //});
    for(let i=0; i<totalCount; i++){
      pickaxes = [...pickaxes, '\u26CF'];//<-pickaxe emoji
    }
  
    setPickaxes(pickaxes) //set pickaxes array
  }

  return (
    <div>
      <header>
        <h1>React Rock Pickers</h1>
        {/* display total rock count */}
        <h2>Total Count: {totalCount}</h2> 
        {/* display pickaxe emojis */}
        <p>{pickaxes}</p>

        <p>
          "You ain't ever worked a day until you worked a day picking rocks." -
          Mike Schlangen
        </p>
      </header>


      {/* send function updateTotalCount down to each RockCounter using props */}
      <h3>Luke</h3>
      <RockCounter changeCount={updateTotalCount} />

      <h3>JJ</h3>
      <RockCounter changeCount={updateTotalCount} />

      <h3>Sam</h3>
      <RockCounter changeCount={updateTotalCount} />

      <h3>Pete</h3>
      <RockCounter changeCount={updateTotalCount} />
    </div>
  );
}

export default App;
