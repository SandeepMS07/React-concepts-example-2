import React from 'react';
import D from './D';
// import B from './B';
// passing directly to d component without passing props down 

export let studentContext = React.createContext("jspiders")
export let employeeContext = React.createContext("qspiders")

function A() {
  return <studentContext.Provider value={"Dinga"}>
                <employeeContext.Provider value={"Raju"}>
                    <D/>
                </employeeContext.Provider>

        </studentContext.Provider>
//   <div>
//       {/* <B name="Dinga"/> */}
//   </div>;

    

}

export default A;
