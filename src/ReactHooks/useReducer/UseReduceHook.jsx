import React, { useReducer } from 'react';

let initialState = 0;

let reducer = (currentState, action) =>
{
    switch (action) {
        case "increment":
            // console.log(initialState);
            // console.log(currentState);
            return currentState+1;
        
        case "decrement":
            return currentState-1;
        
        case "reset":
            return  initialState;  
        
        default:
            return currentState;
    }
}


function UseReduceHook() {

    const [count, dispatcher] = useReducer(reducer, initialState);
  return <div>
      <h1>UseReducer</h1>

      <h1>count : {count}</h1>

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

export default UseReduceHook;
