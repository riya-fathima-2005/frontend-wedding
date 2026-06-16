import React, { useState } from "react";
import "../../assets/Style/Faq.css";
import { Link } from "react-router-dom";


const faqData = {
  guests: [
    {
      question: "Why should I attend a stranger’s wedding?",
      answer:
        "Experience authentic celebrations, meet new people, and enjoy the beauty of Indian wedding traditions firsthand.",
    },
    {
      question: "Why should I use PureWeds?",
      answer:
        "We connect you with real weddings safely and curate experiences that are respectful and memorable.",
    },
    {
      question: "Why am I paying to be a guest?",
      answer:
        "The fee helps hosts manage their wedding events and ensures a smooth experience for everyone.",
    },
  ],
  hosts: [
    {
      question: "Why invite foreigners to my wedding?",
      answer:
        "It’s a chance to share your culture, make new friends, and create memorable moments.",
    },
    {
      question: "Why use PureWeds?",
      answer:
        "We handle guest verification and support hosts to manage international attendees efficiently.",
    },
    {
      question: "How do I know that guests will respect my wedding?",
      answer:
        "All guests agree to follow your wedding guidelines, ensuring traditions are respected.",
    },
  ],
};

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (id) => {
    setOpenIndexes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-background  ">
      <div className="faq-card container">
        <h2 className="faq-title text-center">More About PureWeds</h2>
        <div className="faq-columns">
          <div className="faq-column container">
            <h3 className="faq-subtitle text-center">For Guests</h3>
            {faqData.guests.map((item, index) => {
              const id = `g-${index}`;
              return (
                <div
                  key={id}
                  className="faq-item"
                  onClick={() => toggleIndex(id)}
                  role="button"
                  aria-expanded={openIndexes.includes(id)}
                >
                  <div className="faq-question">
                    {item.question}
                    <span
                      className={`arrow ${
                        openIndexes.includes(id) ? "open" : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  <div
                    className={`faq-answer ${
                      openIndexes.includes(id) ? "open" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-column container">
            <h3 className="faq-subtitle text-center">For Hosts</h3>
            {faqData.hosts.map((item, index) => {
              const id = `h-${index}`;
              return (
                <div
                  key={id}
                  className="faq-item"
                  onClick={() => toggleIndex(id)}
                  role="button"
                  aria-expanded={openIndexes.includes(id)}
                >
                  <div className="faq-question">
                    {item.question}
                    <span
                      className={`arrow ${
                        openIndexes.includes(id) ? "open" : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  <div
                    className={`faq-answer ${
                      openIndexes.includes(id) ? "open" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq-button-container">
          <Link to="/faqqq" className="faq-button text-decoration-none">
            Find Out More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
