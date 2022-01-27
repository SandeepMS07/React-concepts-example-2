import axios from 'axios';
import React, { Component } from 'react';

export default class HttpGetMethods extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    
    componentDidMount()
    {
        axios.get("https://api.github.com/users").then(res=>
            {
                this.setState({posts:res.data})
                console.log(this.state.posts);
            }).catch(err=>
            {
                console.log(err);
            })
    }
  
    render() {
        let {posts} = this.state;
    return <div>
        {posts.map(post=>{
            console.log(post.login);
            return <div key={post.id}>
                <li>{post.login}</li>
                <img src={post.avatar_url} alt="" height={200} width={200} />
            </div>
        })}
    </div>;
  }
}
