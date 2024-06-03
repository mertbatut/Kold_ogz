import React from 'react';
import { motion } from 'framer-motion';

function Stats() {
  return (
    <section className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">1,700,000</h3>
            <p>Instagram followers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">1,270,000</h3>
            <p>YouTube Subscribers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">56,900,000</h3>
            <p>Views on YouTube</p>
          </motion.div>
        </div>
        <motion.p
          className="mt-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Sam Kolder is a renowned self-taught filmmaker, best-known for his unique style of video editing that influenced a new era of content creation.
        </motion.p>
      </div>
    </section>
  );
}

export default Stats;
