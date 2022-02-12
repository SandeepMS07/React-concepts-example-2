import React from 'react'

function Jspiders() {
    console.log('jspiders rendering')
  return (
    <div> 
        <h1>Hello I am Jspiders</h1>
    </div>
  )
}

export default React.memo(Jspiders)