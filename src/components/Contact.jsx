import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', formData);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Failed to send message.');
    }
  };

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
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" value={formData.email} onChange={handleChange} required />
          </div>
          <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded" value={formData.message} onChange={handleChange} required></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="consent" className="form-checkbox" required />
            <span>I agree to the <a href="/privacy" className="text-primary">privacy policy</a>.</span>
          </label>
          <button type="submit" className="w-full px-4 py-2 bg-primary text-white rounded">Submit</button>
        </motion.form>
        {formStatus && <p className="mt-4">{formStatus}</p>}
      </div>
    </section>
  );
}

export default Contact;
