import React from 'react';

function ContactPage() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div className="flex space-x-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="consent" className="form-checkbox" />
            <span>I agree to the <a href="/privacy" className="text-blue-500">privacy policy</a>.</span>
          </label>
          <button type="submit" className="w-full px-4 py-2 bg-gray-800 text-white rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
