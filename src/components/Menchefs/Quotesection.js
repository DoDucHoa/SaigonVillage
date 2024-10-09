import React from 'react'
import Backgroundimage from '../../assets/images/background/image-12.jpg';

function Quotesection() {
  return (
    <>
      <section className="intro-section quote">
        <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h3>A modern restaurant with a menu that will make your mouth water.</h3>
            <div className="separator"><span></span><span></span><span></span></div>
            <div className="auth-title">Henry - Master chef</div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Quotesection