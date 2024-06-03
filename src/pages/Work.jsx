import React from 'react';

function Work() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="work-item">
            <img src="https://via.placeholder.com/1080" alt="Work 1" className="w-full" />
            <h3 className="text-2xl font-semibold mt-4">Films</h3>
            <p>Renowned for pushing his creative limits. Sam's work is best-known for his unique style of video editing.</p>
          </div>
          <div className="work-item">
            <img src="https://via.placeholder.com/1080" alt="Work 2" className="w-full" />
            <h3 className="text-2xl font-semibold mt-4">Photography</h3>
            <p>Creative moments from Sam's life and work. Share your brand's story and mission from a new perspective.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
