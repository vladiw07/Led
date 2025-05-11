import React, { useState, useEffect } from 'react';
import Button from './Button';

const FeatureCard = ({ image, title, description, layout, bgColor, imageWidth }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isImageTop = isMobile || layout === 'imageTop';
  const textAlign = isImageTop ? 'text-center items-center' : 'text-left items-start -mt-0';

  return (
    <div
      className={`
        flex flex-col 
        ${isImageTop ? 'flex-col' : 'flex-col-reverse'} 
        rounded-xl p-6
      `}
      style={{ backgroundColor: bgColor }}
    >
      <img
  src={image}
  alt={title}
  className={`mx-auto ${isImageTop ? 'mb-4' : 'mt-4'}`}
  style={{ width: imageWidth || '100%' }}
/>
      <div className={`flex flex-col ${textAlign}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-base mb-4">{description}</p>
        <Button label="Learn More" />
      </div>
    </div>
  );
};

export default FeatureCard;
