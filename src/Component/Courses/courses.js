//create a allcourses page in react

import Nav from '../NavBar/Nav';
import Footer from '../Footer/footer'
import React, { Component } from 'react'

export default class Courses extends Component {
  render() {
    return (
      <div>
        <h1 className='head'>Live Virtual Class</h1>
      <Nav/>
      <div className="section">
        <section>
          <article>
            <h1>Welcome To  All courses ...</h1>
          </article>
        </section>
      </div>
      <Footer/>
    </div>
     
    )
  }
}