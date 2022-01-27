import React from 'react';

function PureClickCounter(props) {
  return <div>
      {console.log("Hi I am Pure Component")}
      <h1>Pure component Name : {props.name}</h1>
  </div>;
}

// export default React.memo(PureClickCounter);
export default PureClickCounter;
