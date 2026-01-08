import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaQuestionCircle } from "react-icons/fa";

const HelpSupportPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and visiting 'My Orders'.",
    },
    {
      question: "What is the return policy?",
      answer: "You can return any product within 15 days of delivery. Ensure the product is unused and in original packaging.",
    },
    {
      question: "Do you provide pet nutrition guidance?",
      answer: "Yes! You can contact our support team for personalized nutrition advice.",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  text-gray-500 py-16 px-4">
      
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          PetMart Help & Support
        </h1>
        <p className="mt-2 text-gray-400  text-lg md:text-xl">
          We’re here to help you and your furry friends 🐾
        </p>
      </div>

      {/* Support Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className=" backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <FaPhoneAlt className="text-3xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl text-gray-400 font-bold mb-2">Call Us</h3>
          <p className="text-gray-400">+880 1234*567890</p>
        </div>
        <div className="backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl text-gray-400 font-bold mb-2">Email Support</h3>
          <p className="text-gray-400 dark:text-gray-300">support@pawmart.com</p>
        </div>
        <div className="backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
          <FaHeadset className="text-3xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl text-gray-400 font-bold mb-2">Live Chat</h3>
          <p className="text-gray-400">Chat with our support team 24/7</p>
        </div>
      </div>

      {/* Help Article */}
      <div className="max-w-4xl mx-auto mb-16 p-6 backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Comprehensive Guide to Caring for Your Pet
        </h2>
        <p className="text-gray-400 dark:text-gray-300 leading-7">
          Pets bring joy, companionship, and love into our lives, but they also require attention, care, and understanding. Ensuring the health and happiness of your furry friends involves multiple factors, including nutrition, exercise, mental stimulation, and regular veterinary care. A well-balanced diet tailored to your pet’s age, breed, and specific needs is essential. Always provide fresh water and avoid feeding harmful human foods. Exercise is equally important; regular walks, playtime, and interactive toys help maintain physical fitness and prevent behavioral issues.
        </p>
        <p className="text-gray-400 dark:text-gray-300 leading-7 mt-4">
          Grooming and hygiene play a significant role in a pet’s well-being. Brushing fur, trimming nails, and cleaning ears prevent infections and maintain comfort. For pets with long fur, regular grooming reduces mats and tangles. Vaccinations and routine health checks are crucial to prevent disease. Stay aware of common pet health problems and consult a veterinarian at the first sign of illness. Mental health is equally important: provide toys, puzzles, and social interaction to keep your pet engaged.
        </p>
        <p className="text-gray-400 dark:text-gray-300 leading-7 mt-4">
          Safety is another key aspect. Ensure your home is pet-proof, removing toxic plants, chemicals, and small objects that can be swallowed. During travel, use carriers or seatbelts designed for pets to prevent injury. Establishing a daily routine with consistent feeding, exercise, and training fosters trust and reduces stress. Socialization helps pets develop positive behaviors and adapt to new environments. By following these comprehensive steps, you ensure your pets live a long, healthy, and happy life, strengthening the bond between you and your beloved companions.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaQuestionCircle className="text-blue-500" />
                <h3 className="font-semibold text-gray-400 text-lg">{faq.question}</h3>
              </div>
              <p className="text-gray-400 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Contact Support
        </h2>
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/50 border border-gray-700 rounded-3xl p-8 flex flex-col gap-4 shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-400/40 dark:bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-400/40 dark:bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-gray-400/40 dark:bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <button className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform">
            Submit
          </button>
          {submitted && (
            <p className="text-green-400 font-medium mt-2 text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HelpSupportPage;
