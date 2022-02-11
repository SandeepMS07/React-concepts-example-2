import React, { useContext } from 'react'
import { counterContext } from './UseReducerWithUseContext'

function C() {
  
    let count = useContext(counterContext);
    console.log(count);
  
    return (
    <div>
        <h1>Counter From C : {count.mycount}</h1>
        <button onClick={()=>
        {
            count.mydispatcher("increment")
        }}>Increment</button>

        <button onClick={()=>
        {
            count.mydispatcher("decrement")
        }}>Decrement</button>
        <button onClick={()=>
        {
            count.mydispatcher("reset")
        }}>Reset</button>

    </div>
  )
}

export default C