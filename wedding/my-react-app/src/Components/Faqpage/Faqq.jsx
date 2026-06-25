import React, { useState } from "react";
import "../../assets/Style/Faqq.css";
import wed7 from "../../assets/Images/banimgjpj.jpeg";

const faqData = [
  {
    question: "What is Pure Wedding.com about?",
    answer:
      "Pure Wedding connects people worldwide by letting travelers attend real weddings and experience authentic celebrations.",
  },

  {
    question:
      "What inspired the idea of inviting people to join others' weddings?",
    answer:
      "Weddings are cultural experiences. By opening weddings to international guests, we create opportunities for connection and shared joy.",
  },

  {
    question:
      "What role can weddings play in connecting people across cultures?",
    answer:
      "Weddings let guests experience customs, traditions, and hospitality, fostering cultural exchange and lasting friendships.",
  },

  {
    question: "Where is Pure Wedding located?",
    answer:
      "Our team is based in Norway, but we work with hosts and guests from all over the world.",
  },
];

const Faqq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

        {/* New Banner First */}
        <div className="banner-wrapper">
          <div className="banner-box">
            <img src={wed7} alt="decor" className="decore-img" />
    
            <div className="banner-overlay"></div>
    
            <div className="banner-content">
              <h2 style={{marginTop:"200px"}}>FAQ</h2>
              <p style={{ fontSize:"35px", fontFamily:"Cormorant Garamond, serif"}}>HOME / FAQ</p>
            </div>
          </div>
        </div>
    

      {/* FAQ SECTION */}
      <div className="faq-container">

        <h2 className="faq-title text-center">
          ABOUT PURE WEDDING
        </h2>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleIndex(index)}
            >

              <div className="faq-question">

                {item.question}

                <span
                  className={`arrow ${openIndex === index ? "open" : ""}`}
                >
                  &#9660;
                </span>

              </div>

              <div className="faq-answer">
                {item.answer}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Faqq;