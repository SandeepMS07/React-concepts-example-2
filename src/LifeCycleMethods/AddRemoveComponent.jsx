import React, { useState } from 'react';
import UseEffect from '../ReactHooks/UseEffect';
// import LifeCycleMethods from './LifeCycleMethods';

function AddRemoveComponent() {
  const [isbool, setisbool] = useState(true);
  return <div>
      {/* {isbool && <LifeCycleMethods/>} */}
      {isbool && <UseEffect/>}
      {isbool+""}
      <hr />
      <button onClick={()=>
    {
        setisbool(!isbool)
    }}>Add/Remove</button>

  </div>;
}

export default AddRemoveComponent;