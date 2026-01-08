import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'How do I book a pet care service?',
    answer:
      'You can easily book a service by browsing our services, selecting your preferred option, and clicking on the booking button.',
  },
  {
    question: 'Is PawMart available outside Dhaka?',
    answer:
      'Yes! PawMart currently operates in multiple cities including Chattogram, Sylhet, Rajshahi, and more.',
  },
  {
    question: 'Are your pet products safe and authentic?',
    answer:
      'Absolutely. All products listed on PawMart are verified, high-quality, and safe for pets.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept secure online payments including cards, mobile banking, and cash on delivery in select areas.',
  },
  {
    question: 'Can I cancel or reschedule a service?',
    answer:
      'Yes, services can be canceled or rescheduled from your dashboard before the service time.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach our support team via live chat or the contact page. We are always happy to help!',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-base-100 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-base-300 rounded-xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-lg">
                  {item.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-sm opacity-80">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
