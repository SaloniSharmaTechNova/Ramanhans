import React from 'react'
import "./AboutUs.css"
import img1 from "../../assests/de7dc805-b85d-44e6-b475-760f15e76ac2.png"
import img2 from "../../assests/cc581311-efb9-4581-91bc-9e47e8b8ca42.png"
import img3 from "../../assests/0c9270b8-c877-4aad-bac4-d99139e1df63.png"

export default function AboutUs() {
  return (
    <div className='about-page'>
      <section className="about-heading">
        <h2>About Raman Hans Ministries</h2>
        <p>
          Sharing the Gospel of Jesus Christ and bringing hope,
          healing, and transformation to millions around the world.
        </p>
      </section>

      <div className="container">
        <div className="card">
          <img src={img1} alt="" className="first-img"></img>
          <div className='intro'>
            <h1>Roman hans</h1>
            <p>This is our first poster</p>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt=""></img>
          <div className='intro'>
            <h1>Roman hans</h1>
            <p>This is our first poster</p>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt=""></img>
          <div className='intro'>
            <h1>Roman hans</h1>
            <p>This is our first poster</p>
          </div>
        </div>
      </div>
    </div>

  )
}



