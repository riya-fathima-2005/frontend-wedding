import React, { useState } from "react";

const faqData = [
  {
    question: "Can I talk to the couple before I arrive to the venue?",  answer:  "Yes. After your booking is confirmed, you’ll be able to communicate with the couple through Pure Wedding.com. This allows you to introduce yourself, ask questions, understand the wedding schedule, and clarify any details before arriving. It helps ensure everyone feels comfortable and well-prepared for the celebration.",},

  {
    question: "Am I expected to bring a present?",answer:"No, bringing a present is not expected. Your participation and contribution through Pure Wedding already support the couple and their celebration. However, if you wish to bring a small, thoughtful gift or a card as a personal gesture, it is always welcome—but entirely optional.",},
  {
    question: "Am I expected to wear traditional Indian attire?",answer:"Wearing traditional Indian attire is not mandatory, but it is warmly encouraged as a way to fully enjoy the experience and respect local customs. If you choose not to, elegant or festive clothing is perfectly acceptable. The couple or host will usually share dress guidance in advance to help you feel comfortable and appropriately dressed.",},
  {
    question: "How does JoinMyWedding operate with couples?",answer:"JoinMyWedding works closely with couples who choose to open their wedding to international guests. Couples create a listing on the platform, share details about their celebration, and decide which events they would like guests to attend. JoinMyWedding supports them by managing visibility, bookings, secure payments, and communication with guests. This allows couples to focus on their wedding while safely and comfortably welcoming people from different cultures into their celebration.", },
];

const Before = () => {
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
    
    <div className="faq-container">
      <h2 className="faq-title text-center">BEFORE THE WEDDING / PREPARATION</h2>
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
  )
}

export default Before
