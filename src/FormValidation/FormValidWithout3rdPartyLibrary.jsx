import React,{useEffect, useState} from 'react';
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
      // console.log(formvalues);
       setformerrors(valid(formvalues))
       setissubmit(true)
  }

  useEffect(()=>
  {
    console.log(formerrors);
    if(Object.keys(formerrors).length==0 && issubmit == true )
    {
      console.log(formvalues);
    }
  },[formerrors])

  //! validation function
  let valid = (values)=>
  {
    let errors = {};
    let userReg = /^[A-Za-z]+$/g;
    let mobReg = /^[6-9][0-9]{9}$/g;


    //! mobile
    if(!values.mobile)
    {
      errors.username = "mobile Required";
    }
    else if(!mobReg.test(values.mobile))
    {
      errors.mobile = "Enter valid indian mobile number"
    }

    //! password
    if(!values.password)
    {
      errors.username = "password Required";
    }




    //! username
    if(!values.username)
    {
      errors.username = "username Required";
    }
    else if(!userReg.test(values.username))
    {
      errors.username="username must contain only Alphabets"
    }
    else if(values.username.length<6)
    {
      errors.username = "username must contain atleast 6 characters"
    }
    else if(values.username.length>10)
    {
      errors.username="username must contain less than 11 characters"
    }

 

    return errors;
  }

  return <div>
            <h1>{JSON.stringify(formvalues)}</h1>
            <div className='main-div'>
                <form action="" className='my-form' onSubmit={sendData}>
                  <p>{formerrors.username}</p>
                  <div className='form-div'>
                    <input type="text" placeholder='username' name='username' onChange={changeData}/>
                  </div>

                  <p>{formerrors.password}</p>
                  <div className='form-div'>
                    <input type="password" placeholder='password' name='password' onChange={changeData}/>
                  </div>

                  <p>{formerrors.mobile}</p>
                  <div className='form-div'>
                    <input type="tel" placeholder='mobile' name='mobile' onChange={changeData}/>
                  </div>

                  <div className='form-div'>
                    <button type='submit'>Login</button>
                  </div>

                </form>
            </div>;
  </div>
}

export default FormValidWithout3rdPartyLibrary;
