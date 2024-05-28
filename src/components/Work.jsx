import React from 'react';

const Work = () => {
  return (
    <section id="work" className="py-16 text-white bg-black px-4">
      <h2 className="text-4xl text-center mb-8">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="https://besthqwallpapers.com/Uploads/26-8-2016/3465/thumb2-mountain-lake-mountains-boats-forest-blue-sky.jpg" alt="Work 1" className="rounded-lg mb-4" />
          <h3 className="text-2xl">Films</h3>
          <p>Renowned for pushing his creative limits...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="https://besthqwallpapers.com/Uploads/26-8-2016/3465/thumb2-mountain-lake-mountains-boats-forest-blue-sky.jpg" alt="Work 2" className="rounded-lg mb-4" />
          <h3 className="text-2xl">Photography</h3>
          <p>Creative moments from Sam's life and work...</p>
        </div>
        {/* Add more work items as needed */}
      </div>
    </section>
  );
};

export default Work;
