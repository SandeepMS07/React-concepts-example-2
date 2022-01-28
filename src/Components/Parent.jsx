import React, {PureComponent } from 'react';
import PureClickCounter from './PureClickCounter';

export default class Parent extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"Dinga"
        }
      }
      
      updateName1 = () =>
      {
          this.setState({name:"Raju"})
      }
  
      updateName2 = () =>
      {
          this.setState({name:"Rani"})
      }
  
    render() {
      return <div>
          <PureClickCounter name={this.state.name}/>
          <button onClick={this.updateName1}>Raja</button>
          <button onClick={this.updateName2}>Rani</button>
  
      </div>;
    }
  }
  