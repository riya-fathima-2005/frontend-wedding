import React, { useState } from "react";

const faqData = [
  {
    question: "I can't log in to the site",
    answer:
      "If you’re having trouble logging in, first make sure you’re using the correct email and password. You can try resetting your password using the “Forgot Password” link on the login page. If the problem persists, clear your browser cache or try a different browser or device. For further assistance, contact Pure Wedding’s support team at support@purewedding.com, and they will help you regain access.",
  },

  {
    question: "I got stuck during the wedding registration process",
    answer:
      "I got stuck during the wedding registration process If you encounter issues while registering for a wedding, try refreshing the page or using a different browser or device. Make sure all required fields are filled correctly. If the problem persists, contact Pure Wedding’s support team at support@purewedding.com for immediate assistance. They will guide you step by step to complete your registration smoothly.",
  },
  {
    question: "I'm unable to upload the wedding photo during registration",
    answer:
      "I'm unable to upload the wedding photo during registration If you’re having trouble uploading your wedding photo, make sure the file meets the platform’s requirements (such as format, size, and resolution). Try refreshing the page or using a different browser or device. If the issue continues, contact Pure Wedding support at support@purewedding.com for assistance—they will help you upload the photo successfully.",
  },
];

const Technical = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title text-center">TECHNICAL TROUBLESHOOTING</h2>
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

export default Technical;
