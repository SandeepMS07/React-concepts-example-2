// import React from 'react';
// import { employeeContext, studentContext } from './A';

// function D(props) {
//   return <studentContext.Consumer>
//         {(sname)=>
//         {
//             return <employeeContext.Consumer>
//                 {(ename)=>
//                 {
//                     return <>
//                         <h1>D Component Student : {sname} Employee: {ename}</h1>
//                     </>
//                 }}
//             </employeeContext.Consumer>
//         }}

//         </studentContext.Consumer>
  
// //   <div>
// //       <h1>D component name : {props.name}</h1>
// //   </div>;

    

// }

// export default D;

import React, { useContext } from 'react';
import { employeeContext, studentContext } from './A';

function D() {

    let student = useContext(studentContext);
    let employee = useContext(employeeContext)
  return <div>
      <h1>D component</h1>
      <h2>Student : {student} and Employee : {employee}</h2>
  </div>;
}

export default D;
