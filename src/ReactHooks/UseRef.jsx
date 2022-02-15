import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [count, setcount] = useState(0)

    let interval = useRef()

    let updateCount = () =>
    {
        setcount(p=> p+1)
    }

    useEffect(() => {
      interval.current = setInterval(updateCount,1000)
    
      return () => {
        clearInterval(interval.current)
      }
    }, [ ])
    
  return   <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>
    {
        clearInterval(interval.current)
    }}>Stop Counter</button>
  </div>
}

export default UseRef