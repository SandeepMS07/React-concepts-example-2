import React, { useReducer } from 'react';

let initialState = 0;

let reducer = (currentState, action) =>
{
    switch (action.type) {
        case 'increment':
            return currentState+action.value;
        case 'decrement':
            return currentState-action.value;
        case 'reset':
            return initialState;
            
    
        default:
            return currentState;
    }
}

function MultipleUseReducerPassingValue() {
   let [count1, dispatcher1] = useReducer(reducer, initialState);
   let [count2, dispatcher2] = useReducer(reducer, initialState);
  
  return <div>

      
        <h1>count1 : {count1}</h1>
        <h1>count2 : {count2}</h1>

        <button onClick={()=>
        {
            dispatcher1({type:'increment', value:1})
        }}>Increment1</button>

        <button onClick={()=>
        {
            dispatcher1({type:'decrement', value:1})
        }}>Decrement1</button>


        <button onClick={()=>
        {
            dispatcher1({type:"reset"})
        }}>Reset1</button>
        
        <hr />

        <button onClick={()=>
        {
            dispatcher2({type:'increment', value:3})
        }}>Increment2</button>

        <button onClick={()=>
        {
            dispatcher2({type:'decrement', value:3})
        }}>Decrement2</button>
 

        <button onClick={()=>
        {
            dispatcher2({type:"reset"})
        }}>Reset2</button>

  </div>;
}

export default MultipleUseReducerPassingValue;
