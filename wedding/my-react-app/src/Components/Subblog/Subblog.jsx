import React from "react";
import { Link } from "react-router-dom";
import freepik1 from "../../assets/Images/freepik1.jpeg";
import "../../assets/Style/Subblog.css";
import wed8 from "../../assets/Images/ban3.png";

const Subblog = () => {

  return (

    <div>

      {/* ===================================
          FULL WIDTH BANNER
      =================================== */}

      <div className="imge-contain">

        <img
          src={wed8}
          alt="wed8"
          className="wed8-img"
        />

        {/* OVERLAY TEXT */}

        <div className="banner-content">

          <h1 className="banner-heading">
            Blog
          </h1>

        </div>

      </div>

      {/* ===================================
          PAGE CONTENT
      =================================== */}

      <div className="container py-5">

        {/* TOP SECTION */}

        <div className="row mb-5 align-items-center">

          <div className="col-md-6">

            <img
              src={freepik1}
              alt="Indian wedding feast"
              className="img-fluid rounded"
            />

          </div>

          <div className="col-md-6">

            <h3 className="bloghead">

              A Feast for the Senses:
              Discovering the Culinary Magic
              of an Indian Wedding

            </h3>

            <p className="blogpara">

              Attending an Indian wedding is nothing short
              of a sensory explosion—vibrant colors, joyful
              music, and intricate rituals come together to
              create an unforgettable celebration.

              The culinary journey at an Indian wedding
              isn’t just about eating; it’s an immersive
              reflection of India’s rich cultural diversity
              and traditions.

            </p>

          </div>

        </div>

        {/* SECTION */}

        <div className="mb-5">

          <h3 className="text-center bloghead">

            Regional Delights:
            A Culinary Journey Through India

          </h3>

          <p className="blogpara text-center">

            India’s cuisine reflects its rich cultural diversity,
            with every region offering unique flavors and traditions.

          </p>

        </div>

        {/* LIST */}

        <div className="mb-5">

          <ul className="list-unstyled">

            <li className="mb-4">

              <h4>North India</h4>

              <p className="blogpara">

                Weddings in North India are synonymous
                with indulgence. Think creamy butter chicken,
                fragrant biryanis, stuffed naan, and an array
                of chaat.

              </p>

            </li>

            <li className="mb-4">

              <h4>South India</h4>

              <p className="blogpara">

                A South Indian wedding might feature banana
                leaf platters piled high with dosa, idli,
                sambhar, rasam, and coconut-based curries.

              </p>

            </li>

            <li className="mb-4">

              <h4>West India</h4>

              <p className="blogpara">

                In Gujarat or Rajasthan, vegetarian cuisine
                takes center stage with dishes like
                dal baati churma and Gujarati thali.

              </p>

            </li>

            <li className="mb-4">

              <h4>East India</h4>

              <p className="blogpara">

                Bengali weddings are renowned for fish,
                seafood, and decadent sweets like
                rasgulla and sandesh.

              </p>

            </li>

          </ul>

        </div>

        {/* SECTION */}

        <div className="mb-5">

          <h3 className="bloghead">

            Vegetarianism:
            A Celebration of Simplicity

          </h3>

          <p className="blogpara">

            Vegetarianism holds a special place in Indian weddings,
            where food is prepared with care, balance, and tradition.

          </p>

        </div>

        {/* SECTION */}

        <div className="mb-5">

          <h3 className="bloghead">

            Interactive Food Stations
            and Live Counters

          </h3>

          <p className="blogpara">

            Interactive food stations and live counters
            have become a highlight of modern Indian weddings.

          </p>

        </div>

        {/* SECTION */}

        <div className="mb-5">

          <h3 className="bloghead">

            Culinary Inclusivity:
            A Guest for All Palates

          </h3>

          <p className="blogpara">

            Indian weddings are celebrated with food
            that welcomes everyone, catering to a variety
            of tastes and traditions.

          </p>

        </div>

        {/* SECTION */}

        <div className="mb-5">

          <h3 className="bloghead">

            An Invitation to Indulge

          </h3>

          <p className="blogpara">

            Indian weddings are a feast for the senses,
            inviting guests to indulge in a rich tapestry
            of flavors, colors, and aromas.

          </p>

        </div>

        {/* BUTTON */}

        <div className="text-center py-3">

          <Link
            to="/blog"
            className="faq-button text-decoration-none"
          >

            Back to Posts

          </Link>

        </div>

      </div>

    </div>

  );
};

export default Subblog;