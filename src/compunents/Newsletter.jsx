import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto  rounded-3xl shadow-lg p-10 md:p-14 text-center relative overflow-hidden">
          
          {/* Decorative blur */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Join Our Newsletter
          </h2>

          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Subscribe to get exclusive pet care tips, offers, and updates directly to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full rounded-full px-6"
              required
            />

            <button
              type="submit"
              className="btn btn-primary rounded-full px-8 flex items-center gap-2"
            >
              Subscribe <FaPaperPlane />
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-5">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
