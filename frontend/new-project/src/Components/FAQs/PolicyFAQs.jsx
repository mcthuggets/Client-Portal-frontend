import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import FAQ1 from '../images/FAQs/faq1.svg'

function PolicyFAQs() {
  const [faqOpen, setFaqOpen] = useState([false, false, false, false, false]);

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  const faqData = [
    {
      question: "What is an insurance policy?",
      answer:
        "An insurance policy is a legally binding contract between you and the insurance company. It outlines the terms, conditions, and coverage details of your insurance plan.",
    },
    {
      question: "What does my insurance policy cover?",
      answer:
        "Your policy document provides a detailed list of what is covered under your specific insurance plan. Coverage can vary depending on the type of policy you have, so it's essential to review your policy document carefully.",
    },
    {
      question: "How do I obtain a copy of my insurance policy?",
      answer:
        "You can access a digital copy of your insurance policy through your online account on our website. If you prefer a physical copy, please contact our customer service team, and we can provide one for you.",
    },
    {
      question: "Can I make changes to my existing insurance policy?",
      answer:
        "Yes, you can make changes to your policy. Contact our customer service team to discuss any modifications or updates you wish to make. Keep in mind that changes may affect your premium.",
    },
    {
      question: "What is a policy premium, and how do I pay it?",
      answer:
        "Your policy premium is the amount you pay for your insurance coverage. You can pay your premium through various methods, including online payments, automatic withdrawals, or by mailing a check to our office. Details on payment methods can be found in your policy documents.",
    },
  ];

  return (
    <div className="policy-FAQ">
      <div style={{ textAlign: 'center' }}>
        <h2> Policy FAQS </h2>
        <img src={FAQ1} width={'400px'} />
      </div>

      <div>
        {faqData.map((faq, index) => (
          <div className="FAQ" key={index} onClick={() => toggleFaq(index)}>
            <div className="row">
              <h4>{faq.question}</h4>
              {faqOpen[index] ? <FaMinus /> : <FaPlus />}
            </div>
            <hr />
            {faqOpen[index] && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolicyFAQs;
