import React, { useState, useEffect } from 'react';

const FeatureCard = ({ image, title, description, layout, bgColor, imageWidth }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const effectiveLayout = isMobile ? 'imageTop' : layout;

  return (
    <div
  className={`
    flex 
    flex-col-reverse 
    md:${layout === 'imageTop' ? 'flex-col' : 'flex-col-reverse'} 
    rounded-xl p-6
  `}
  style={{ backgroundColor: bgColor }}
>
      <img
        src={image}
        alt={title}
        className="mx-auto mb-4"
        style={{ width: imageWidth || '100%' }}
      />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
