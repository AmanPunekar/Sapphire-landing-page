import React, { useState } from "react";
import "../frequent.css";

const FAQComponent = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAnswer = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index)); // Remove index
    } else {
      setActiveIndices([...activeIndices, index]); // Add index
    }
  };

  const faqs = [
    {
      question: "How do I open a trading and Demat account with your firm?",
      answer:
        "You can open your account online in minutes by submitting your PAN card, Aadhaar, and bank details, or visit our office for assistance.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide stock broking, mutual fund distribution, portfolio management, insurance solutions, and expert financial advisory.",
    },
    {
      question: "Are my investments safe with your firm?",
      answer:
        "Yes, we are SEBI-registered and comply with all regulatory guidelines to ensure the security of your investments.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndices.includes(index) ? "active" : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span
                className={`faq-icon ${
                  activeIndices.includes(index) ? "" : "rotate"
                }`}
              >
                {activeIndices.includes(index) ? "✕" : "✕"}
              </span>
            </div>
            {activeIndices.includes(index) && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
