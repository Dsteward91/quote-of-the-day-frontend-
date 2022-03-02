import React from 'react';
import Navbar from "../navbar"
import Footer from "../footer"


export default function About(props) {  
    return (
      <div className='page-wrapper'>
        <Navbar />
        <div className="content-wrapper">
            <h2>About</h2>
            <p>This website provides a new inspirational quote daily! Come back and be inspired!</p>
        </div>
        <Footer />
      </div>
    );
}
