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
               <h2 style={{marginTop:"200px"}}>BLOG</h2>
               <h2 style={{marginTop:"180px", marginLeft:"105px", fontSize:"35px", fontFamily:"Cormorant Garamond, serif"}}>HOME / BLOG</h2>
             </div>
           </div>
         </div>
     
      {/* BLOG SECTION */}
      <div className="blog-section">
        <div className="container">
          <div className="row g-4">

            {/* FIRST CARD */}
            <div className="col-lg-6 col-md-6">
              <div className="blog-card">
                <img
                  src={blogpic}
                  alt="Indian wedding cuisine"
                  className="img-fluid"
                />

                <h3 className="text-center bloghead">
                  Culinary Traditions of Indian Weddings
                </h3>

                <p className="blogpara">
                  Attending an Indian wedding is nothing short of a sensory
                  explosion—vibrant colors, joyful music, intricate rituals,
                  and unforgettable culinary experiences. Indian weddings are
                  celebrations filled with culture, emotion, and flavors.
                </p>

              

                <div className="text-center py-3">
                  <Link
                    to="/blogs"
                    className="faq-button text-decoration-none"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* SECOND CARD */}
            <div className="col-lg-6 col-md-6">
              <div className="blog-card">
                <img
                  src={blogpic1}
                  alt="Saat Phere ritual"
                  className="img-fluid"
                />

                <h3 className="text-center bloghead">
                  Seven Promises, One Sacred Bond
                </h3>

                <p className="blogpara">
                  Indian weddings are vibrant celebrations filled with color,
                  music, and rituals that hold deep spiritual meaning. Among
                  the most profound traditions is the saat phere, symbolizing
                  lifelong commitment and sacred bonding.
                </p>

                

                <div className="text-center py-3">
                  <Link
                    to="/blogss"
                    className="faq-button text-decoration-none"
                  >
                    Read More
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