import React, { Component } from 'react';

export default class LifeCycleMethods extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    interval;
    
    updateCount = () =>
    {
        console.log("counter Updated");
        this.setState({count:this.state.count+1})
    }

    componentDidMount()
    {
        document.title = `title from didMount ${this.state.count} times`
        this.interval = setInterval(this.updateCount,1000);
    }
    componentDidUpdate(prevProps, prevState)
    {
        document.title = `title from didUpdate ${this.state.count} times`
    }
    componentWillUnmount(){
        console.log("counter removed successfully");
        clearInterval(this.interval)
    }
    render() {
    return <div>
        <h1>Count : {this.state.count} </h1>
        {/* <button onClick={this.updateCount}>Update</button> */}
    </div>;
  }
}
