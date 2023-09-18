import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import FAQ2 from '../images/FAQs/faq2.svg'

function ClaimsFAQs() {

  const [faqOpen, setFaqOpen] = useState([false, false, false, false, false]);

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  const faqData = [
    {
      question: "How do I file a claim?",
      answer:
        "To file a short-term insurance claim, you typically need to contact your insurance provider and provide them with the necessary information regarding your claim. This may include details about the incident, supporting documentation, and any other required information. Contact your insurance company's claims department for specific instructions.",
    },
    {
      question: "What documentation do I need to submit when filing a short-term insurance claim?",
      answer:
        "The documentation required for filing a short-term insurance claim can vary depending on the type of claim you are making. Generally, you may need to provide incident reports, photographs, medical bills (if applicable), police reports (if relevant), and any other supporting evidence related to your claim. It's essential to check with your insurance provider for a comprehensive list of required documents.",
    },
    {
      question: "How long does it take to process a short-term insurance claim?",
      answer:
        "The time it takes to process a short-term insurance claim can vary based on the complexity of the claim and the policies of your insurance provider. Some claims can be processed relatively quickly, while others may take more time. It's advisable to contact your insurance company for an estimated timeline for your specific claim.",
    },
    {
      question: "Can I track the status of my short-term insurance claim online?",
      answer:
        "Many insurance providers offer online tools or customer portals that allow you to track the status of your short-term insurance claim. Check with your insurance company to see if they offer this service and how to access it.",
    },
    {
      question: "What should I do if my short-term insurance claim is denied?",
      answer:
        "If your short-term insurance claim is denied, you have the right to appeal the decision. Review the denial letter provided by your insurance company to understand the reasons for the denial. You can then gather additional information or documentation to support your claim and submit an appeal to your insurance provider. It's essential to follow the appeals process outlined by your insurance company.",
    },
  ];
  

  return (
    <div className="policy-FAQ">

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


      <div style={{ textAlign: 'center' }}>
        <h2> Claims FAQS </h2>
        <img src={FAQ2} width={'400px'} />
      </div>

    </div>
  );
}

export default ClaimsFAQs;
