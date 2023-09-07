import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight  } from "react-icons/fa6";


function PolicyFAQs() {
  const [faq1Open, setFaq1Open] = useState(false);
  const [faq2Open, setFaq2Open] = useState(false);
  const [faq3Open, setFaq3Open] = useState(false);
  const [faq4Open, setFaq4Open] = useState(false);
  const [faq5Open, setFaq5Open] = useState(false);
  const [faq6Open, setFaq6Open] = useState(false);
  const [faq7Open, setFaq7Open] = useState(false);
  const [faq8Open, setFaq8Open] = useState(false);
  const [faq9Open, setFaq9Open] = useState(false);
  const [faq10Open, setFaq10Open] = useState(false);
  const [faq11Open, setFaq11Open] = useState(false);
  const [faq12Open, setFaq12Open] = useState(false);

  return (
    <>
      <div className="FAQ">
        <h4 onClick={() => setFaq1Open(!faq1Open)}>1. What is an insurance policy?</h4>
        {faq1Open && <p>An insurance policy is a legally binding contract between you and the insurance company. It outlines the terms, conditions, and coverage details of your insurance plan.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq2Open(!faq2Open)}>2. What does my insurance policy cover?</h4>
        {faq2Open && <p>Your policy document provides a detailed list of what is covered under your specific insurance plan. Coverage can vary depending on the type of policy you have, so it's essential to review your policy document carefully.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq3Open(!faq3Open)}>3. How do I obtain a copy of my insurance policy?</h4>
        {faq3Open && <p>You can access a digital copy of your insurance policy through your online account on our website. If you prefer a physical copy, please contact our customer service team, and we can provide one for you.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq4Open(!faq4Open)}>4. Can I make changes to my insurance policy after it has been issued?</h4>
        {faq4Open && <p>Yes, you can make changes to your policy. Contact our customer service team to discuss any modifications or updates you wish to make. Keep in mind that changes may affect your premium.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq5Open(!faq5Open)}>5. What is a policy premium, and how do I pay it?</h4>
        {faq5Open && <p>Your policy premium is the amount you pay for your insurance coverage. You can pay your premium through various methods, including online payments, automatic withdrawals, or by mailing a check to our office. Details on payment methods can be found in your policy documents.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq6Open(!faq6Open)}>6. Is there a grace period for premium payments?</h4>
        {faq6Open && <p>Most policies come with a grace period during which you can make your premium payment without a lapse in coverage. The length of the grace period may vary, so consult your policy document for specific details.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq7Open(!faq7Open)}>7. How often do I need to renew my insurance policy?</h4>
        {faq7Open && <p>The renewal frequency depends on the type of policy you have. Some policies renew annually, while others may have different renewal periods. You will receive a renewal notice well in advance of your policy's expiration date.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq8Open(!faq8Open)}>8. What happens if I don't renew my policy on time?</h4>
        {faq8Open && <p>If you fail to renew your policy before the expiration date, your coverage may lapse, and you will no longer be protected. It's crucial to renew your policy promptly to avoid any gaps in coverage.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq9Open(!faq9Open)}>9. How can I cancel my insurance policy?</h4>
        {faq9Open && <p>To cancel your policy, please contact our customer service team. Keep in mind that there may be cancellation fees or penalties, so review your policy document for details.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq10Open(!faq10Open)}>10. What should I do if I need to file a claim?</h4>
        {faq10Open && <p>If you need to file a claim, please contact our claims department as soon as possible. They will guide you through the claims process and provide the necessary forms and instructions.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq11Open(!faq11Open)}>11. Are there any discounts available for policyholders?</h4>
        {faq11Open && <p>We offer various discounts to eligible policyholders. These discounts may include multi-policy discounts, safe driver discounts, and more. Please check with our customer service team to see if you qualify for any discounts.</p>}
      </div>

      <div className="FAQ">
        <h4 onClick={() => setFaq12Open(!faq12Open)}>12. How can I contact your customer service team for policy-related inquiries?</h4>
        {faq12Open && <p>You can reach our customer service team through the provided phone number, email address, or by visiting our "Contact Us" page on the website. We're here to assist you with any questions or concerns regarding your policy.</p>}
      </div>
    </>
  );
}

export default PolicyFAQs;
