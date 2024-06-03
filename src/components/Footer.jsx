import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://www.youtube.com/user/koldstudios" className="hover:underline">YouTube</a>
          <span>|</span>
          <a href="https://www.instagram.com/samkolder/" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4">&copy; 2023 Sam Kolder</p>
      </div>
    </footer>
  );
}

export default Footer;
