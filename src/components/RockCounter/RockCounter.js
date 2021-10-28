import React, { useState } from 'react';

function RockCounter() {

  const [isZero, setIsZero] = useState(true);
  const [done, setDone] = useState(false);
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount(++count);
    if (count >= 50) {
      setDone(true);
    }
    checkZero();
  }

  const decrease = () => {
    if (count > 0) {
      setCount(--count);
    }
    if (count < 50) {
      setDone(false);
    }
    checkZero();
  }

  const checkZero = () => {
    if (count === 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  }

  const reset = () => {
    setDone(false);
    setCount(count = 0);
    //setCount(0); why doesn't this work, but line above does? 
    //console.log('count:', count);
    checkZero();
  }



  return (
    <div>
      <div>Rocks Picked: {count} {done ? <p>DONE</p> : <span></span>}</div>
      <div>
        <button onClick={increase}>Increase</button>
        {isZero ? <span></span> : <button onClick={decrease}>Decrease</button>}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default RockCounter;
