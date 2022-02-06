import React, { useReducer } from 'react';

let initialState = {
    firstCounter : 0
}

let reducer = (currentState, action) =>
{
    switch (action) {
        case 'increment':
           return {firstCounter:currentState.firstCounter+1}
        case 'decrement':
            return {firstCounter:currentState.firstCounter-1}
        case 'reset':
            return {firstCounter:initialState.firstCounter}
    
        default:
            return currentState
    }
}

function UseReducerWithObject() {
    const [count, dispatcher] = useReducer(reducer, initialState);
  return <div>
      <h1>UseReducer</h1>

        <h1>count : {count.firstCounter}</h1>

        <button onClick={()=>
        {
            dispatcher('increment')
        }}>Increment</button>

        <button onClick={()=>
        {
            dispatcher("decrement")
        }}>Decrement</button>

        <button onClick={()=>
        {
            dispatcher("reset")
        }}>Reset</button>
  </div>;
}

export default UseReducerWithObject;
