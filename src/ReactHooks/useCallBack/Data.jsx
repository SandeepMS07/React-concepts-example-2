import React from 'react'

function Data(props) {
    console.log(`${props.text} is rendering`);
  return (
    <div> 
        <h1>{props.text} : {props.val}</h1>
    </div>
  )
}

export default React.memo(Data)