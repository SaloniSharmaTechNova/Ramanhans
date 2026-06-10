import React from 'react'
import "./Ministry.css"
import img1 from "../../assests/image.event.png"
import img2 from "../../assests/image.event.png"
import img3 from "../../assests/image.event.png"
import img4 from "../../assests/image.event.png"
import img5 from "../../assests/image.event.png"
import img6 from "../../assests/image.event.png"

export default function Ministry() {
  return (
    <div>
      <section className="ministry">
  <div className="ministry-heading">
    <h2>Ministry & Teaching</h2>
    <p>
      Transforming Lives Through the Gospel of Jesus Christ Worldwide
    </p>
  </div>

  <div className="ministry-container">

    <div className="ministry-card">
      <img src={img1} alt="" />
      <h3>Global Crusades</h3>
      <p>
        Leading powerful evangelistic crusades that draw thousands
        seeking salvation, healing, and deliverance.
      </p>
    </div>

    <div className="ministry-card">
      <img src={img2} alt="" />
      <h3>Biblical Teaching</h3>
      <p>
        Preaching Spirit-filled messages that reveal biblical truth
        and strengthen believers in their faith.
      </p>
    </div>

    <div className="ministry-card">
      <img src={img3} alt="" />
      <h3>Television Ministry</h3>
      <p>
        Broadcasting the Gospel through Daily Bread on Shubh Sandesh TV
        and reaching countless homes.
      </p>
    </div>

    <div className="ministry-card">
      <img src={img4} alt="" />
      <h3>Healing & Deliverance</h3>
      <p>
        Ministering healing, deliverance, and restoration through
        prayer services and revival meetings.
      </p>
    </div>

    <div className="ministry-card">
      <img src={img5} alt="" />
      <h3>Digital Outreach</h3>
      <p>
        Reaching millions worldwide through YouTube, social media,
        and online ministry platforms.
      </p>
    </div>

    <div className="ministry-card">
      <img src={img6} alt="" />
      <h3>Books & Publications</h3>
      <p>
        Author of impactful Punjabi and Hindi Christian books that
        inspire faith and spiritual growth.
      </p>
    </div>

  </div>
</section>
    </div>
  )
}
