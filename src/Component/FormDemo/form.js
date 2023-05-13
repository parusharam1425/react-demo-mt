import React, { Component } from 'react'

export class form extends Component {

    constructor(props){
        super(props);
        this.state ={show: ''};
    }
    changeText =(event) =>{
        this.setState({show: event.target.value})
    }

  render() {
    let head='';
    if (this.state.show){
        head=<h1>Thank You For Registration  {this.state.show}</h1>;
    }
    return (
      <div>
        <form>
            {head}
            <p>
                Register Your self :
            </p>
            <input type='text'  onChange={this.changeText}/>
        </form>
      </div>
    )
  }
}

export default form