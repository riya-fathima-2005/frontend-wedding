import React, { useState } from "react";

const faqData = [
  {
    question: "What happens if the wedding is cancelled?",
    answer:
      "If a wedding is cancelled, JoinMyWedding will inform you as soon as possible. Depending on the circumstances and timing, you will receive a full or partial refund according to the platform’s cancellation policy. Our team will support you throughout the process and help ensure a fair and transparent resolution.",
  },

  {
    question: "What happens if I cannot join the wedding?",
    answer:
      "If you are unable to attend a wedding you’ve booked, please inform JoinMyWedding as soon as possible. Refunds or credits will be handled according to the platform’s cancellation policy and the timing of your cancellation. Our team is here to support you and ensure the process is as smooth and fair as possible.",
  },
];

const Cancel = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title text-center">CANCELLATION</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleIndex(index)}>
                
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

export default Cancel;
