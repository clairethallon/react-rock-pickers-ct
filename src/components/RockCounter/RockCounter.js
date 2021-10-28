import React, { useState } from 'react';

function RockCounter(props) {

  const [isZero, setIsZero] = useState(true); //set bool for whether this picker's current count is zero
  const [done, setDone] = useState(false); //set bool for whether this picker's current count is > 50
  let [count, setCount] = useState(0); //confused about let vs const here - only let works with setCount(count++)

  const increase = () => {
    //function that increases this rock picker's count

    setCount(++count);     //step 1: increase the count - basemode!
    props.changeCount(1);     //step 2: send this increase (we're always adding 1) to parent
    checkFifty();     //step 3: check if the count exceeds 50
    checkZero();     //step 4: check if the count is zero
  }

  const decrease = () => {
    //function that decreases this rock picker's count

    //step 0: IF the count is not already at zero (no negatives allowed)...
    if (count > 0) {  
      setCount(--count); //step 1: decrease the count
      props.changeCount(-1); //step 2: send this decrease (always -1) to parent
      checkFifty(); //step 3: check if the count exceeds 50
      checkZero();  //step 4: check if the count is zero
    }
  }

  const checkFifty = () => {
    //function that checks if the count is > 50 and toggles bool appropriately 

    if (count < 50) {
      setDone(false); 
    } else {
      setDone(true);
    }
  }

  const checkZero = () => {
    //function that checks if the count is 0 and toggles bool appropriately 

    if (count === 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  }

  const reset = () => {
    //function that resets the count to zero

    props.changeCount(-count); //in this case we want to send to parent what the count was BEFORE the reset, to subtract that amount from the total
    setDone(false); //toggle bool
    setCount(count = 0); //toggle count
    //QUESTION! setCount(0); why doesn't this work, but line above does? 
    //QUESTION! console.log('count:', count);
    checkZero(); //check if count is zero (spoiler alert: it is)
  }



  return (
    <div>
      {/* show count for this picker. If they're done (>50 rocks picked), show "DONE" */}
      <div>Rocks Picked: {count} {done ? <p>DONE</p> : <span></span>}</div>
      <div>
        <button onClick={increase}>Increase</button>

        {/* display the 'decrease' button, unless the count is currently 0 (no negatives allowed)*/}
        {isZero ? <span></span> : <button onClick={decrease}>Decrease</button>}
        <button onClick={reset}>Reset</button>

      </div>
    </div>
  );
}

export default RockCounter;
