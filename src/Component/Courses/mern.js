import React from 'react'
import Nav from '../NavBar/Nav';
import Footer from '../Footer/footer';


export default function mern() {

 

  return (
    <div>
        <h1 className='head'>Live Virtual Class</h1>
      <Nav/>
      <div className="section">
        <section>
          <article>
            <h1>Welcome To Mern...</h1>
            <p>Fee : 40K</p>
            <p>Duration : 20Days</p>
          </article>
        </section>
      </div>
      <Footer/>
    </div>
  )
}



