import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="py-20 bg-light-bg text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <motion.form
          className="max-w-lg mx-auto space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="consent" className="form-checkbox" />
            <span>I agree to the <a href="/privacy" className="text-primary">privacy policy</a>.</span>
          </label>
          <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded">Submit</button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
