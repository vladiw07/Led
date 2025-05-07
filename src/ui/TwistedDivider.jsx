import React from 'react';

const TwistedDivider = ({ bgColor = '#FFFBF4' }) => {
  return (
    <div
      className="block w-full leading-none max-h-[145px] m-0 p-0 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1620 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M1620 128H0C0 128 42 -7.67075e-05 511 0C980 7.67075e-05 1545.76 92.991 1620 128Z"
          fill="#1B1B1B"
        />
      </svg>
    </div>
  );
};

export default TwistedDivider;
