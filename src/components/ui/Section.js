import React from 'react';

const Section = ({ 
  children, 
  title, 
  subtitle, 
  className = '',
  id,
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`py-16 px-6 ${className}`} 
      {...props}
    >
      <div className="container mx-auto max-w-6xl">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;