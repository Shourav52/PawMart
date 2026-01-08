import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
    <div className="">
      {/* Floating Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-400 opacity-15 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section className="h-80 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-900 via-indigo-100 dark:via-indigo-800 to-purple-100 dark:to-purple-900 opacity-40 blur-2xl"></div>
        <div className="relative text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 dark:from-blue-400 to-indigo-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Contact PawMart 🐾
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Have questions? We’re here to help!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 -mt-16 relative z-10">
        
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaMapMarkerAlt />, title: "Address", desc: "123 PawMart Street, Dhaka, Bangladesh" },
            { icon: <FaPhoneAlt />, title: "Phone", desc: "+880 1234*567890" },
            { icon: <FaEnvelope />, title: "Email", desc: "support@pawmart.com" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4 max-w-3xl relative">
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/30 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 flex flex-col gap-6 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Send Us a Message
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-4 rounded-xl bg-white/40 dark:bg-gray-700/30 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition shadow-inner"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-4 rounded-xl bg-white/40 dark:bg-gray-700/30 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition shadow-inner"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="p-4 rounded-xl bg-white/40 dark:bg-gray-700/30 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition shadow-inner"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all"
            >
              Send Message <FaPaperPlane />
            </button>

            {submitted && (
              <p className="text-green-500 font-medium mt-2 text-center">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">See Location</h1>
        <div className="container mx-auto px-4 max-w-full h-80  overflow-hidden shadow-2xl ">
          <iframe
            title="PawMart Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8871340181283!2d90.39851841543103!3d23.750903984588932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1b8f63edb83%3A0x579be6b79fdd1b71!2sDhaka!5e0!3m2!1sen!2sbd!4v1680000000000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 10s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
