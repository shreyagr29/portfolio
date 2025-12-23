import React from 'react';

const SectionWrapper = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto h-full">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
