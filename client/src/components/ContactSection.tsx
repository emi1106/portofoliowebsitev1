import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = ({ setIsModalOpen }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-8">
          I'm always excited to hear about new ideas and opportunities!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Mail className="mr-2" />
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default ContactSection;