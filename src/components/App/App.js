import React, { useState } from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);



  return (
    <div>
      <header>
        <h1>React Rock Pickers</h1>

        <p>Total Count: {count1 + count2 + count3 + count4}</p>

        <p>
          "You ain't ever worked a day until you worked a day picking rocks." -
          Mike Schlangen
        </p>
      </header>

      <h2>Luke</h2>

      <RockCounter changeCountTACO={count1 => setCount1(count1)} />

      <h2>JJ</h2>
      <RockCounter changeCountTACO={count2 => setCount2(count2)} />

      <h2>Sam</h2>
      <RockCounter changeCountTACO={count3 => setCount3(count3)} />

      <h2>Pete</h2>
      <RockCounter changeCountTACO={count4 => setCount4(count4)} />
    </div>
  );
}

export default App;
