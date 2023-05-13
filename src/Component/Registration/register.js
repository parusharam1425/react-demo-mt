import React, { Component } from 'react'
import Nav from '../NavBar/Nav';
import Footer from '../Footer/footer';


export class register extends Component {
  constructor() {
    super();
    this.state = {
      participate: '',
        age: null,

    }
}

submitHandler = (event) => {
    event.preventDefault();
    alert(`Hey ! ${this.state.participate} , \n Registred `);
}

changeHandler = (event) => {
  let nam = event.target.name;
  let age = event.target.value;

  if (nam === "age") {
      if (!Number(age)) {
          alert("Your age should not be a character");
          return
      }
  }
  this.setState({ [nam]: age})
  
}



  render() {
    return (
      <div>
      <h1 className='head'>Live Virtual Class</h1>
      <Nav />
      <div className="section pt-5 pb-5">
        <section>
          <article>
            <form action="#" method="POST" className="contact-form" onSubmit={this.submitHandler}>
              <h2>Registration</h2>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="participate" placeholder="Enter Your Name" required onChange={this.changeHandler}/>
              </div>

              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" name="age" placeholder="Enter Your age" required onChange={this.changeHandler}/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter Your password" required />
              </div>

              <button className='btn btn-danger' type="submit">Submit</button>
            </form>
          </article>
        </section>
      </div>
      <Footer />
    </div>
    )
  }
}

export default register