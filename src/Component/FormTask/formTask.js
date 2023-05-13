import React, { Component } from 'react'

export class formTask extends Component {

    constructor(){
        super();
        this.state ={show: ''};
    }
    submitHandler =(event) =>{
        event.preventDefault();
        alert(this.state.show + " Registered");
    }
    changeText = (event) =>{
        this.setState({show: event.target.value});
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
           <h1>Welcome </h1>
            <p>
                Register Your Name and click on submit :
            </p>
            <input type='text'  onChange={this.changeText}/>
            <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default formTask