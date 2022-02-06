import React, { useReducer } from 'react';

let initialState = 0;

let reducer = (currentState, action) =>
{
    switch (action) {
        case 'increment':
            return currentState+1;
        case 'decrement':
            return currentState-1;
        case 'reset':
            return initialState;
            
    
        default:
            return currentState;
    }
}

function MultipleUseReducer() {
   let [count1, dispatcher1] = useReducer(reducer, initialState);
   let [count2, dispatcher2] = useReducer(reducer, initialState);
  
  return <div>

      
        <h1>count1 : {count1}</h1>
        <h1>count2 : {count2}</h1>

        <button onClick={()=>
        {
            dispatcher1('increment')
        }}>Increment1</button>

        <button onClick={()=>
        {
            dispatcher1("decrement")
        }}>Decrement1</button>


        <button onClick={()=>
        {
            dispatcher1("reset")
        }}>Reset1</button>
        
        <hr />

        <button onClick={()=>
        {
            dispatcher2('increment')
        }}>Increment2</button>

        <button onClick={()=>
        {
            dispatcher2("decrement")
        }}>Decrement2</button>
 

        <button onClick={()=>
        {
            dispatcher2("reset")
        }}>Reset2</button>

  </div>;
}

export default MultipleUseReducer;
