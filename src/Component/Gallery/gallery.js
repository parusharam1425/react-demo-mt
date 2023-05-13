import React from 'react';
import Nav from '../NavBar/Nav';

import './gallery.css'

import Footer from '../Footer/footer';
import Images from '../Images/download1.jpg';
import Image from '../Images/download.jpg';

const Gallery = () => {
  return (
    <div>
      <h1 className='head'>Live Virtual Class</h1>
      <Nav />
      <div className="section">
        <section>
          <article>
            <div className="gallery">
           
              <img src={Images} alt="Image 1" />
              <img src={Image} alt="Image 2" />
              <img src={Images} alt="Image 1" />
              <img src={Image} alt="Image 2" />
              <img src={Images} alt="Image 1" />
              <img src={Image} alt="Image 2" />
              <img src={Images} alt="Image 1" />
              <img src={Image} alt="Image 2" />
              
            </div>
            
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
