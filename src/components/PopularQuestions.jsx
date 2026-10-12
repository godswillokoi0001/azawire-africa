import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is Azawire?",
    answer:
      "Azawire is a next-generation banking platform integrating Web3 technology to make global payments seamless. We offer stablecoin on-ramp and off-ramp services, virtual cards, USSD payments, WhatsApp banking, and free US account numbers for ACH transfers.",
  },
  
  {  
    question: "Who is Azawire for?",
    answer:
      "Azawire is designed for freelancers and remote workers who need seamless cross-border payments, businesses seeking fast and low-cost transactions, and everyday users looking for simple and accessible banking solutions.",
  },

{  
    question: "How does Azawire work?",
    answer:
      "Azawire bridges traditional banking with Web3, enabling global payments with stablecoins, easy fund withdrawals through on-ramp/off-ramp solutions, virtual cards for online transactions, and seamless payments via USSD and WhatsApp, even without internet access.",
  },

  {  
    question: "What makes Azawire different from regular banks?",
    answer:
      "Unlike traditional banks, Azawire supports crypto and stablecoin transactions, offers borderless banking powered by Web3 technology, provides free US account numbers for seamless ACH transfers, and enables offline transactions via USSD.",
  },

   {  
    question: "Is Azawire safe?",
    answer:
      "Yes! Security is a top priority at Azawire. Azawire uses blockchain technology, encryption, and compliance protocols to protect your funds and data.",
  },

  {  
    question: "Can I use Azawire without crypto knowledge?",
    answer:
      "Absolutely! Azawire is designed for everyone, whether you’re familiar with crypto or not. Our platform makes it easy to use stablecoins and traditional payment methods seamlessly. ",
  },

  {  
    question: "How do I sign up?",
    answer:
      "Signing up is simple—just click the Sign Up button, fill in your details, verify your account, and start transacting instantly!",
  },

  {  
    question: "Does Azawire have an app?",
    answer:
      "Yes! Azawire will launch a mobile app soon for a smoother experience. Stay tuned!",
  },

   {  
    question: "How can I contact support?",
    answer:
      "For any questions, reach out via email at support@azawire.com or connect with us on Twitter and Telegram.",
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