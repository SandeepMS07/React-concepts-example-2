import React, { useReducer } from 'react'
import A from './A'

export let counterContext = React.createContext();
let initialState = 0;
let reducer = (currentState,action) =>
{
    switch (action) {
        case "increment":
            return currentState+1;
        case "decrement":
            return currentState-1;
        case "reset":
            return initialState;

        default:
            return currentState;
    }
}

function UseReducerWithUseContext() {
    const [count, dispatcher] = useReducer(reducer, initialState)
  return (
    <div> 
        <counterContext.Provider value={{mycount:count, mydispatcher:dispatcher}}>
            <A/>
        </counterContext.Provider>
       

    </div>
  )
}

export default UseReducerWithUseContext