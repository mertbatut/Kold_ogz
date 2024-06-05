import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: `Client-ID lebXp2bZjS1BO4AZFCCUBf9vbIPNnjZUetCI_RAdvdQ` // Unsplash API anahtarınızı buraya koyun
          },
          params: {
            query: 'office', // İsteğe bağlı olarak arama terimini değiştirebilirsiniz
            orientation: 'landscape'
          }
        });
        setBackgroundImage(response.data.urls.full);
      } catch (error) {
        console.error('Error fetching background image from Unsplash', error);
      }
    };

    fetchBackgroundImage();
  }, []);

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
    <section
      className="py-20 text-white relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-left">Get in touch</h2>
        <motion.form
          className="max-w-lg mx-auto space-y-4 bg-opacity-75 bg-gray-800 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">MESSAGE</label>
            <textarea
              name="message"
              placeholder="Start typing here ..."
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="consent" className="form-checkbox" required />
            <span>I agree to the <a href="/privacy" className="text-blue-500">privacy policy</a>.</span>
          </label>
          <button type="submit" className="w-full px-4 py-2 bg-orange-500 text-white rounded">Submit</button>
        </motion.form>
        {formStatus && <p className="mt-4">{formStatus}</p>}
      </div>
    </section>
  );
}

export default Contact;
