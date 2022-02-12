import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)
  
    let updatecount1 = () =>
    {

        setcount1(count1+1)
    }

    let updatecount2 = () =>
    {
        setcount2(count2+1)
    }

    let isEven = useMemo(() =>
    {
        let i =0;
        while(i<1000000000){
            i++;
        }
        
        console.log("isEven rendering")
        return count1%2===0;
        
    }, [count1])

 return  <div>
    <h1>CountOne: {count1} {isEven?"Even":"Odd"}</h1>
    <button onClick={updatecount1}>Update Count1 </button>

    <h1>CountTwo: {count2}</h1>
    <button onClick={updatecount2}>Update Count2</button>



  </div>
}

export default UseMemo