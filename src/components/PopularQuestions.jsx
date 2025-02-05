import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is Azawire?",
    answer:
      "Azawire is a next-generation banking platform integrating Web3 technology to make global payments seamless. We offer stablecoin on-ramp and off-ramp services, virtual cards, USSD payments, WhatsApp banking, and free US account numbers for ACH transfers.",
  },
  {
    question: "Who is Azawire for?",
answer: `Azawire is built for:
- Freelancers & remote workers who need smooth cross-border payments. 

- Businesses looking for fast, low-cost transactions.

- Everyday users who want simple and accessible banking solutions
`,
  },
  {
    question: "How does Azawire work?",
    answer:
      "Merit’s behind on afraid or warmly. Feet you off its like like six. Among sex are leave law built now.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Law county unable her sister. Really boy law county she unable her sister. Feet you off its like like six.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Among sex are leave law built now. In built table in an rapid blush. Merit’s behind on afraid or warmly.",
  },
  {
    question: "Do you offer custom blog writing services?",
    answer:
      "Feet you off its like like six. Among sex are leave law built now. Law county unable her sister.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer:
      "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  },
  {
    question: "What is the cost of our services?",
    answer:
      "In built table in an rapid blush. Merit’s behind on afraid or warmly. Law county unable her sister.",
  },
  {
    question: "How do we manage content delivery?",
    answer:
      "Merit’s behind on afraid or warmly. Feet you off its like like six. Among sex are leave law built now.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Law county unable her sister. Really boy law county she unable her sister. Feet you off its like like six.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Among sex are leave law built now. In built table in an rapid blush. Merit’s behind on afraid or warmly.",
  },
  {
    question: "Do you offer custom blog writing services?",
    answer:
      "Feet you off its like like six. Among sex are leave law built now. Law county unable her sister.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Buttons Section */}
        <div className="flex flex-wrap gap-3 justify-start mb-8">
          {[
            "Payments",
            "USSD Service",
            "Payment Link",
            "API Integration",
            "Policy",
          ].map((button, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
            >
              {button}
            </button>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-12">Frequently Asked Questions</h1>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition duration-200"
              onClick={() => toggleFAQ(index)}
              style={{ alignSelf: "start" }}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiMinus className="text-xl text-gray-600" />
                ) : (
                  <FiPlus className="text-xl text-gray-600" />
                )}
              </div>

              {openIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
