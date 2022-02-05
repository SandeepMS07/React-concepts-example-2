import React from 'react';
import C from './C';

function B(props) {
  return <div>
      <C name={props.name}/>
  </div>;
}

export default B;
