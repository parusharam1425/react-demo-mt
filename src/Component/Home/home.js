import React from 'react';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/footer';



import './home.css'
 export default function Home() {
  return (
    <div>
        <h1 className='head'>Live Virtual Class</h1>
      <Nav/>
      <div className="section">
        <section>
          <article>
            <h1>Welcome To Live Virtual Class ...</h1>
          </article>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
