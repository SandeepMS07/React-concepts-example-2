import './App.css';
import HttpPostMethod from './Components/HttpPostMethod';
// import Parent from './Components/Parent';
// import UseStateName from './Components/UseStateName';
// import HttpGetMethods from './Components/HttpGetMethod';

function App() {
  return (
    <div className="App">

       {/* <HttpGetMethods/> */}

       {/* By default functional based components as a pure component */}
       {/* <UseStateName/> */}

        {/* make pure component using one class component as parent and function component as child component */}
        {/* <Parent/> */}


        {/* howw to post dat to apis */} 
        <HttpPostMethod/>
    </div>
  );
}

export default App;
