import React from 'react';

function ClickCounter(props) {
  return <div>
      {console.log("hello i am component")}
      <h1>Component Name : {props.name}</h1>
  </div>;
}

export default ClickCounter;
