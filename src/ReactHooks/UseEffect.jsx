import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState(" ");

  let updateName=(e)=>
  {
    setname(e.target.value)
  }

  let updateCount = () =>
  {
    console.log("counter updated");
    setcount(count+1)
  } 
  useEffect(() => {
     console.log("UseEffect Called");
     document.title = `Title from useEffect ${count} times`
     let interval=setInterval(updateCount,1000);
    return () => {
       console.log("Component Removed Successfully");
       clearInterval(interval);
    };
  },[ ]);
  
  return <div>
      <h1>UseEffect Count : {count}</h1>
      <input type="text" onChange={updateName}/>
      {/* <button onClick={updateCount}>Update</button> */}
    
    </div>;
}

export default UseEffect; 