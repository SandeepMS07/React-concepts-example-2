import React, { useCallback, useState } from 'react'
import Button from './Button'
import Data from './Data'
import Jspiders from './Jspiders'

function UseCallBack() {
    const [age, setage] = useState(23);
    const [sal, setsal] = useState(5000);


    let updateage = useCallback(
        () =>
        {
            setage(age+1)
        },
      [age],
    )
    

    let updatesal = useCallback(
        () =>
        {
            setsal(sal+200)
        },
      [sal],
    )
    

  return (
    <div> 
        <Jspiders/>
        <Data text="Age" val={age}/>
        <Button updatedata={updateage}>Increment Age</Button>
        <Data text="salary" val={sal}/>
        <Button updatedata={updatesal}>Increment Salary</Button>
    </div>
  )
}

export default UseCallBack