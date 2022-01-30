import React, { useState } from 'react';

function UseStateArray() {

    let myColors=["red","pink","yellow","orange","green","blue"]
    const [colors, setcolors] = useState([]);
    const [count, setcount] = useState(0);

    let addColors = () =>
    {
        setcolors([...colors,{cname:myColors[count]}])
        setcount(count+1)
    }
  return <div>
      {colors.map((c,i)=>
      {
        return <li key={i}>{c.cname}</li>
      })}

      <button onClick={addColors}>Add Colors</button>
  </div>;
}

export default UseStateArray;
