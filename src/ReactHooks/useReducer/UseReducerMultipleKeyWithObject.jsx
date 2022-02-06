import React, { useReducer } from 'react';

let initialState = {
    firstCounter : 0,
    secondCounter: 0
}

let reducer = (currentState, action) =>
{
    switch (action) {
        case 'increment1':
           return {...currentState,firstCounter:currentState.firstCounter+1}
        case 'decrement1':
            return {...currentState,firstCounter:currentState.firstCounter-1}
        case 'increment2':
            return {...currentState,secondCounter:currentState.secondCounter+1}
        case 'decrement2':
            return {...currentState,secondCounter:currentState.secondCounter-1}
        case 'reset':
            return  initialState;
    
        default:
            return currentState
    }
}
function UseReducerMultipleKeyWithObject() {
 
      const [count, dispatcher] = useReducer(reducer, initialState);
     
     return <div>
      <h1>UseReducer</h1>

        <h1>count : {count.firstCounter}</h1>
        <h1>count : {count.secondCounter}</h1>

        <button onClick={()=>
        {
            dispatcher('increment1')
        }}>Increment</button>

        <button onClick={()=>
        {
            dispatcher("decrement1")
        }}>Decrement</button>

        <hr />

        <button onClick={()=>
        {
            dispatcher('increment2')
        }}>Increment</button>

        <button onClick={()=>
        {
            dispatcher("decrement2")
        }}>Decrement</button>

            <hr />

        <button onClick={()=>
        {
            dispatcher("reset")
        }}>Reset</button>
  </div>;
 
}

export default UseReducerMultipleKeyWithObject;
 