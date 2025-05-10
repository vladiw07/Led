import React, { useState, useEffect } from 'react';

const FeatureCard = ({ image, title, description, layout, bgColor, imageWidth }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Always use the layout prop, but default to imageTop on mobile if not explicitly set
  const effectiveLayout = isMobile ? 'imageTop' : layout;

  return (
    <div
      className={`
        flex 
        ${effectiveLayout === 'imageTop' ? 'flex-col' : 'flex-col-reverse'}
        rounded-xl p-6
      `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="mx-auto"
        style={{ width: imageWidth || '100%' }}
      />
    </div>
  );
};

export default FeatureCard;