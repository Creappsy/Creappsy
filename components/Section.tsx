
import React, { forwardRef, PropsWithChildren } from 'react';

interface SectionProps {
  id: string;
  className?: string;
}

const Section = forwardRef<HTMLElement, PropsWithChildren<SectionProps>>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section ref={ref} id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
