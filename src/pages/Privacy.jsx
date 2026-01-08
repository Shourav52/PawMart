import React from "react";
import { FaUserShield } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="flex justify-center mb-4">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-400/10 
                    flex items-center justify-center backdrop-blur-md">
      <FaUserShield className="text-3xl text-blue-500 dark:text-blue-400" />
    </div>
  </div>
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Privacy Policy & Terms of Service
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Your trust matters to us. Please read carefully.
        </p>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto  backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 leading-8 space-y-6">

        <h2 className="text-2xl font-bold">1. Introduction</h2>
        <p>
          Welcome to PetMart. Your privacy and trust are extremely important to us. This Privacy Policy
          and Terms of Service document explains how we collect, use, store, and protect your personal
          information when you use our website, services, and products. By accessing or using PetMart,
          you agree to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-bold">2. Information We Collect</h2>
        <p>
          We collect information to provide better services to our users. This includes personal
          information such as your name, email address, phone number, shipping address, and payment
          details when you place an order or contact support. We may also collect non-personal data,
          including browser type, device information, IP address, and usage behavior to improve
          performance and user experience.
        </p>

        <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
        <p>
          The information we collect is used to process orders, deliver products, provide customer
          support, and communicate important updates. We may also use your data to personalize your
          experience, recommend relevant products, and improve our website functionality. Your data
          helps us ensure security, prevent fraud, and comply with legal obligations.
        </p>

        <h2 className="text-2xl font-bold">4. Data Protection & Security</h2>
        <p>
          PetMart takes data security seriously. We use industry-standard security measures to protect
          your personal information from unauthorized access, alteration, disclosure, or destruction.
          While no online platform can guarantee 100% security, we continuously update our systems and
          practices to safeguard your data.
        </p>

        <h2 className="text-2xl font-bold">5. Cookies & Tracking Technologies</h2>
        <p>
          Our website uses cookies and similar technologies to enhance your browsing experience.
          Cookies allow us to remember your preferences, analyze traffic, and understand user behavior.
          You can control or disable cookies through your browser settings, but doing so may affect
          certain features of the site.
        </p>

        <h2 className="text-2xl font-bold">6. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. However, we may share data
          with trusted partners such as payment processors, delivery services, and analytics providers
          strictly for operational purposes. These partners are obligated to keep your information
          confidential and use it only to perform services on our behalf.
        </p>

        <h2 className="text-2xl font-bold">7. User Responsibilities</h2>
        <p>
          By using PetMart, you agree to provide accurate and up-to-date information. You are responsible
          for maintaining the confidentiality of your account credentials and for all activities that
          occur under your account. Any misuse or unauthorized access should be reported to us
          immediately.
        </p>

        <h2 className="text-2xl font-bold">8. Terms of Service</h2>
        <p>
          PetMart provides its services on an “as-is” basis. While we strive to ensure accuracy and
          availability, we do not guarantee uninterrupted access or error-free operation. We reserve
          the right to modify, suspend, or discontinue any part of our services at any time without
          prior notice.
        </p>

        <h2 className="text-2xl font-bold">9. Intellectual Property</h2>
        <p>
          All content on PetMart, including text, images, logos, and design elements, is the intellectual
          property of PetMart and protected by copyright laws. Unauthorized use, reproduction, or
          distribution of our content is strictly prohibited without written permission.
        </p>

        <h2 className="text-2xl font-bold">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy and Terms of Service from time to time to reflect changes in
          our practices or legal requirements. Any updates will be posted on this page, and continued
          use of the website indicates acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-bold">11. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or Terms of Service,
          please contact us at <span className="font-semibold">support@petmart.com</span>. We are always
          happy to help and clarify any concerns you may have.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-400/30">
          Last updated: January 2027
        </p>

      </div>
    </div>
  );
};

export default Privacy;
