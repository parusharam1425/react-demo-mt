import React, { Component } from 'react'

import './form.css'

export class formTask5 extends Component {
    constructor() {
        super();
        this.state = {
            participate: '',
            designation: '',
            roll_no: null,
            textColor: "Black"

        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(`Name: ${this.state.participate}\nYour designation is: ${this.state.designation}\nRoll No: ${this.state.roll_no} `);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let desig = event.target.name;
        let val = event.target.value;

        if (nam === "roll_no") {
            if (!Number(val)) {
                alert("Your roll_no must be a Number");
                return
            }
        }
        this.setState({ [nam]: val, textColor: "#e67613" })
        this.setState({ [desig]: val, textColor: "#e67613" })
    }



    render() {
        return (
            <div className='form-container'>
                <div className='form-group'>
                    <form onSubmit={this.submitHandler}>

                        <h1 style={{ color: this.state.textColor }}>
                            Hello {this.state.participate}
                        </h1>
                        <p>Register Your Name</p>
                        <input type='text' name='participate' onChange={this.changeHandler} />

                        <h1 style={{ color: this.state.textColor }}>
                            Your Designation is {this.state.designation}</h1>
                        <p>Enter Your Designation</p>
                        <input type='text' name='designation' onChange={this.changeHandler} />

                        <h1 style={{ color: this.state.textColor }}>Your Roll_No is {this.state.roll_no}</h1>
                        <p>Enter Your Roll_No</p>
                        <input type='text' name='roll_no' onChange={this.changeHandler} />

                        <div>
                        <input type='submit' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default formTask5