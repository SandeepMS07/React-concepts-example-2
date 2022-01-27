import './App.css';
import Parent from './Components/Parent';
// import UseStateName from './Components/UseStateName';
// import HttpGetMethods from './Components/HttpGetMethod';

function App() {
  return (
    <div className="App">

       {/* <HttpGetMethods/> */}

       {/* By default functional based components as a pure component */}
       {/* <UseStateName/> */}

        {/* make pure component using one class component as parent and function component as child component */}
        <Parent/>
    </div>
  );
}

export default App;
