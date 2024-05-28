import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white px-4">
      <h2 className="text-4xl text-center mb-8">Get in Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white" />
        <textarea placeholder="Message" className="w-full p-2 border border-gray-500 rounded bg-gray-800 text-white h-32"></textarea>
        <button type="submit" className="w-full bg-orange-500 p-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
