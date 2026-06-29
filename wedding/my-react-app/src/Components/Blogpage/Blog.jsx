import React from "react";
import { Link } from "react-router-dom";

import blogpic from "../../assets/Images/freepik1.jpeg";
import blogpic1 from "../../assets/Images/freepik2.jpeg";
import wed7 from "../../assets/Images/banimgjpj.jpeg";

import "../../assets/Style/Blog.css";

const Blog = () => {
  return (
    <>
      {/* BANNER */}
         {/* New Banner First */}
         <div className="banner-wrapper">
           <div className="banner-box">
             <img src={wed7} alt="decor" className="decore-img" />
     
             <div className="banner-overlay"></div>
     
             <div className="banner-content">
               
               <h2 className="overlay-text">BLOG  </h2>
             </div>
           </div>
         </div>
     
      {/* BLOG SECTION */}
     <div className="luxury-blog-section">
  <div className="container">

    <div className="blog-heading-area text-center">
      <p className="blog-subtitle">OUR JOURNAL</p>
      <h2 className="blog-main-heading">
        Stories & Wedding Traditions
      </h2>
    </div>

    <div className="row gy-5">

      {/* BLOG 1 */}

      <div className="col-lg-6">
        <div className="luxury-blog-card">

          <div className="blog-image-wrapper">
            <img src={blogpic} alt="blog" />
          </div>

          <div className="blog-content">

            <span className="blog-category">
              Wedding Culture
            </span>

            <h3>
              Culinary Traditions of Indian Weddings
            </h3>

            <div>
              Attending an Indian wedding is a sensory experience filled with vibrant colors,
              rituals, music and unforgettable flavors deeply rooted in tradition.
            </div>

            <Link to="/blogs" className="luxury-btn">
              Read Article
            </Link>

          </div>

        </div>
      </div>


      {/* BLOG 2 */}

      <div className="col-lg-6">
        <div className="luxury-blog-card">

          <div className="blog-image-wrapper">
            <img src={blogpic1} alt="blog" />
          </div>

          <div className="blog-content">

            <span className="blog-category">
              Sacred Rituals
            </span>

            <h3>
              Seven Promises, One Sacred Bond
            </h3>

            <div>
              Discover the spiritual significance behind the sacred saat phere ritual,
              symbolizing lifelong commitment and eternal companionship.
            </div>

            <Link to="/blogss" className="luxury-btn">
              Read Article
            </Link>

          </div>

        </div>
      </div>

    </div>
  </div>
</div>
    </>
  );
};

export default Blog;