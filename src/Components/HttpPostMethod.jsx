import React, { Component } from 'react';
import axios from 'axios';
export default class HttpPostMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:"",
         title:"",
         body:""
      }
    }
 
    changeData = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    sendPost = (e) =>
    {
       axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(res=>
        {
            console.log(res);
        }).catch(err=>
            {
                console.log(err);
            })
        console.log(this.state);
        e.preventDefault()
    }

  render() {
      let  {userId,title,body} = this.state;
    return <div>
        <form onSubmit={this.sendPost}>
            <input type="text" placeholder='User ID' value={userId} onChange={this.changeData} name='userId' /> <br />
            <input type="text" placeholder='Title' value={title} onChange={this.changeData} name='title'/> <br />
            <input type="text" placeholder='Body' value={body} onChange={this.changeData} name='body'/> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>;
  }
}
