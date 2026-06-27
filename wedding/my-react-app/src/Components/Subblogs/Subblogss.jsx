import React from "react";
import wed7 from "../../assets/Images/banimgjpj.jpeg";
import { Link } from "react-router-dom";
import "../../assets/Style/Subblog.css";

const Subblogss = () => {
  return (
    <>
      {/* KEEP YOUR EXISTING BANNER */}

      <div className="container py-5">
        <div className="banner-wrapper bannerblog">
                                <div className="banner-box">
                                  <img src={wed7} alt="decor" className="decore-img" />
                          
                                  <div className="banner-overlay"></div>
                          
                                  <div className="banner-content">
                                    
                                     <h2 style={{ marginLeft:"-720px", fontSize:"35px", fontFamily:"Cormorant Garamond, serif", color:"white"}}>HOME / BLOG</h2>
                                  </div>
                                </div>
                              </div>
      </div>

      {/* BLOG CONTENT */}

      <section className="luxury-blog-detail">

        <div className="article-intro">

          <p className="article-category">Sacred Wedding Rituals</p>

          <h2 className="article-main-title">
            The Heart of Indian Weddings:
            Exploring the Sacred Fire Ritual, Saat Phere
          </h2>

          <div className="article-line"></div>

          <p className="article-text">
            Indian weddings are vibrant celebrations full of color, music, and rituals,
            many of which hold deep spiritual meaning. Among the most profound traditions
            is the saat phere, or seven rounds around a sacred fire, symbolizing a lifelong
            bond and commitment between the couple.
          </p>

          <p className="article-text">
            With each step, the couple makes promises to one another covering love, respect,
            health, prosperity, and family—laying the foundation for a shared journey together.
            Witnessing this ceremony offers a rare glimpse into the traditions that define Indian marriages.
          </p>

        </div>


        {/* SECTION 2 */}

        <div className="article-block">

          <h2 className="section-heading">
            Witnessed by Fire: The Spiritual Heart of Indian Weddings
          </h2>

          <p className="article-text">
            In Indian weddings, the sacred fire serves as a divine witness to the couple’s vows.
            Each round represents promises made not only to each other but also in the presence of the divine.
            For travelers attending Indian weddings, observing this ritual reveals how faith and tradition intertwine.
          </p>

        </div>


        {/* SEVEN STEPS */}

        <div className="article-block">

          <h2 className="section-heading center-heading">
            Seven Steps, Seven Promises
          </h2>


          <div className="promise-list">

  <div className="promise-item">
    <span className="promise-number">01</span>
    <div>
      <h4>Nourishing Each Other</h4>
      <p>A lifelong commitment to emotionally, mentally and spiritually support one another.</p>
    </div>
  </div>

  <div className="promise-item">
    <span className="promise-number">02</span>
    <div>
      <h4>Strength and Courage</h4>
      <p>Standing together through life’s challenges with trust, resilience and determination.</p>
    </div>
  </div>

  <div className="promise-item">
    <span className="promise-number">03</span>
    <div>
      <h4>Prosperity and Abundance</h4>
      <p>Building a stable and fulfilling life together with gratitude and harmony.</p>
    </div>
  </div>

  <div className="promise-item">
    <span className="promise-number">04</span>
    <div>
      <h4>Family and Children</h4>
      <p>Creating a loving home where traditions and relationships are honored.</p>
    </div>
  </div>

  <div className="promise-item">
    <span className="promise-number">05</span>
    <div>
      <h4>Spiritual Growth</h4>
      <p>Supporting each other in patience, self-awareness and shared spiritual evolution.</p>
    </div>
  </div>

</div>

        </div>


        {/* FINAL */}

        <div className="article-block">

          <h2 className="section-heading">
            The Sacred Fire Ritual
          </h2>

          <p className="article-text">
            The sacred fire ritual lies at the heart of Indian weddings. As couples circle
            the fire seven times, each step symbolizes love, commitment and shared values.
            This transforms the wedding from a celebration into a profound spiritual journey.
          </p>

        </div>


        {/* BUTTON */}

        <div className="back-btn-wrapper">
          <Link to="/blog" className="luxury-back-btn">
            Back to Posts
          </Link>
        </div>

      </section>
    </>
  );
};

export default Subblogss;