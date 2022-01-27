import React, { useState } from 'react';
import ClickCounter from './ClickCounter';

function UseStateName() {
    const [name, setname] = useState("dinga");

    let updateName1 = () =>
    {
        setname("Raja");
    }
    let updateName2 = () =>
    {
        setname("Rani");
    }
  return <div>
      <ClickCounter name={name}/>
      <button onClick={updateName1}>Raja</button>
      <button onClick={updateName2}>Rani</button>
  </div>;
}

export default UseStateName;
