import React, { useState } from 'react';

function UseState() {
    // const [Fn,setFn] = useState("");
    // const [Ln, setLn] = useState("");
    // const [Add, setAdd] = useState("");

    // let updateFn = (e) =>
    // {
    //     setFn(e.target.value)
    // }

    // let updateLn = (e) =>
    // {
    //     setLn(e.target.value)
    // }

    // let updateAdd = (e) =>
    // {
    //     setAdd(e.target.value)
    // }

    // by using one usestate snippet and one method
    const [data, setdata] = useState({fn:" ", ln:" ", add:" "});
   
    let updateData = (e) =>
    {
         let {name,value} = e.target
        // setdata({...data,[e.target.name]:e.target.value})
        setdata({...data,[name]:value})

    }
    // let updateFn = (e) =>
    // {
    //    setdata({...data,fn:e.target.value})
    // }

    // let updateLn = (e) =>
    // {
    //     setdata({...data,ln:e.target.value})
    // }

    // let updateAdd = (e) =>
    // {
    //     setdata({...data,add:e.target.value})
    // }
    let sendData = (e) =>{
        console.log(data);
        e.preventDefault()
    }

  return <div>
      <form onSubmit={sendData}>
          <h1>{JSON.stringify(data)}</h1>
          <input type="text" placeholder='First Name' onChange={updateData} name='fn'/>
            <br />
          <input type="text" placeholder='Last Name' onChange={updateData} name='ln' />
          <br />
          <textarea name="" placeholder='Address' onChange={updateData} name='add'></textarea>
            <br />
          <button type='submit'>Submit</button>
      </form>
  </div>;
}

export default UseState;
