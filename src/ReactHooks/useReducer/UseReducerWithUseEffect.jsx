import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

let initialState = 
{
    isLoading: true,
    error : "",
    myUser:{}
}

let reducer = (currentState, action) =>
{
    switch (action.type) {
        case "fetch-data":
            return {isLoading:false, error:"",myUser:action.data}
        case "fetch-error":
            return {isLoading:false, error:"Ooops Data Not Found!!!!"}
    
        default:
            return currentState;
    }
}


function UseReducerWithUseEffect() {
    const [user, dispatcher] = useReducer(reducer, initialState);

    useEffect(() => {
       axios.get("https://api.github.com/users/mojombo").
       then(res =>
        {
            console.log(res.data);
            dispatcher({type:"fetch-data",data:res.data})
        }).
        catch(err=>
            {
                dispatcher({type:"fetch-error"})
            })
     
      }, []);
    

  return <div>
            <h1>{user.isLoading?<div className="loader"></div>:<img src={user.myUser.avatar_url}/>}</h1>
            <h1>{user.error?user.error:null}</h1>
         </div>
}
export default UseReducerWithUseEffect