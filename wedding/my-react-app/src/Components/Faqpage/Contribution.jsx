
import React, { useState } from "react";

const faqData = [

  {
    question: "Do international guests need a visa to visit India?",
    answer:
      "Yes, most international travelers require a valid visa to enter India. Guests can apply for an e-Visa online before travel. We recommend checking the official Indian immigration website for the latest visa requirements based on your country.",
  },

  {
    question: "How long does it take to get an Indian e-Visa?",
    answer:
      "Indian e-Visas are usually processed within 3–7 business days. However, we strongly recommend applying at least 2–3 weeks before your travel date to avoid delays.",
  },

  {
    question: "What is the best weather season for weddings in India?",
    answer:
      "The best wedding season in India is typically from October to March, when the weather is cooler and more comfortable across most regions. Summer months can be hot, while monsoon season varies depending on location.",
  },

  {
    question: "What currency is used in India?",
    answer:
      "The official currency of India is the Indian Rupee (INR). International guests can exchange currency at airports, banks, hotels, and authorized exchange centers.",
  },

  {
    question: "Can international cards be used in India?",
    answer:
      "Yes, most hotels, restaurants, and shopping centers accept international debit and credit cards such as Visa and Mastercard. However, carrying some cash is recommended for local markets and small vendors.",
  },

  {
    question: "Is India safe for international wedding travelers?",
    answer:
      "India is a popular destination for international weddings and tourism. We recommend following standard travel precautions, using trusted transportation, and keeping copies of important travel documents.",
  },

  {
    question: "What should guests wear for an Indian wedding?",
    answer:
      "Guests are welcome to wear traditional Indian outfits or elegant formal attire. Bright colors and festive clothing are commonly encouraged for Indian wedding celebrations.",
  },

  {
    question: "Will Wi-Fi and mobile networks be available?",
    answer:
      "Yes, Wi-Fi is widely available in hotels, resorts, and major cities. International guests can also purchase local SIM cards for affordable mobile data and calling services.",
  },

];

const Contribution = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 return (
  <section className="faq-section">

    {/* LEFT SIDE */}

    <div className="faq-left">
      <h2 className="faq-main-heading1">
        INTERNATIONAL <br /> GUEST GUIDE
      </h2>

      <div className="faq-subtext">
        Helpful information for international guests attending Indian weddings. 
        Learn about travel tips, cultural customs, accommodation, local etiquette, 
        and everything you need for a comfortable experience.
      </div>
    </div>

    {/* RIGHT SIDE */}

    <div className="faq-right">
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">
              {item.question}

              <span className="plus-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* show only when clicked */}

            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>

  </section>
);
};

export default Contribution;
