import React,{useState} from 'react';
import './FormValidWithout3rdPartyLibrary.css'

function FormValidWithout3rdPartyLibrary() {
  const [formvalues, setformvalues] = useState({username:"", password:"", mobile:""});
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);


  //! Destructuring Form Values
  let {username,password,mobile} = formvalues;

  //! Updating Form Values
  let changeData = (e) =>
  {
    let {name, value} = e.target;
    setformvalues({...formvalues,[name]:value})
  }


  //! Submitting Form Data
  let sendData = (e)=>
  { 
      e.preventDefault();
      console.log(formvalues);
  }

  return <div className='main-div'>
      <form action="" className='my-form' onSubmit={sendData}>
        <div className='form-div'>
          <input type="text" placeholder='username' name='username' onChange={changeData}/>
        </div>

        <div className='form-div'>
          <input type="password" placeholder='password' name='password' onChange={changeData}/>
        </div>

        <div className='form-div'>
          <input type="tel" placeholder='mobile' name='mobile' onChange={changeData}/>
        </div>

        <div className='form-div'>
          <button type='submit'>Login</button>
        </div>

      </form>
  </div>;
}

export default FormValidWithout3rdPartyLibrary;
