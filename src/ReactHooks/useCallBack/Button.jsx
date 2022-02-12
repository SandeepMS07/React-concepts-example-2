import React from 'react'

function Button(props) {
    console.log(`${props.children} is rendering`)
  return (
    <div> 
        <button onClick={props.updatedata}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button)