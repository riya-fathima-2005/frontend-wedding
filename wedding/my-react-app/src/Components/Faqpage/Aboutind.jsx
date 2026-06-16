
import React, { useState } from "react";


const faqData = [
  {
    question: "How does a typical Indian wedding look like?",
    answer:
      "A typical Indian wedding is a vibrant, multi-day celebration filled with colorful attire, music, rituals, and delicious food. Events often include pre-wedding ceremonies like Mehndi and Sangeet, followed by the main wedding ritual, which varies by region and religion. Guests dress in traditional clothing, enjoy lively dance performances, and take part in age-old customs that symbolize love, family, and new beginnings. The celebration is warm, joyful, and deeply rooted in culture and hospitality.",
  },

  {
    question:
      "What is the motivation of Indian couples to participate?",
    answer:
      "Indian couples are motivated by the desire to share their rich cultural traditions and warm hospitality with people from around the world. Many see it as a meaningful way to celebrate their wedding by creating cross-cultural connections, spreading joy, and making their special day even more memorable. Welcoming international guests also allows couples to showcase the beauty, rituals, and values of Indian weddings on a global stage.",
  },
  {
    question:
      "What does happen over several days on an Indian wedding?",
    answer:
      "An Indian wedding is usually celebrated over several days, with each day featuring special ceremonies and festivities. It often begins with pre-wedding events like the Mehndi ceremony, where henna is applied, and the Sangeet, a joyful evening of music and dancing. The main wedding day includes traditional rituals that symbolize the union of the couple, followed by a grand feast. Celebrations may conclude with a reception, where family, friends, and guests come together to celebrate, dance, and share meals. Each event reflects tradition, family bonding, and vibrant cultural expression.",
  },
];

const Aboutind = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title text-center">ABOUT INDIAN WEDDINGS</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                &#9660;
              </span>
            </div>

            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutind;
