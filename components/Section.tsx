
import React, { PropsWithChildren } from 'react';

interface SectionProps {
  id: string;
  className?: string;
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
