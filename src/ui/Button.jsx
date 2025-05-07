import React from 'react';

function Button({ label, bgColor = '#1c1c1c', textColor = 'white' }) {
  return (
    <button
      className={`px-4 py-2.5 font-semibold rounded-3xl text-1xl transition hover:opacity-80`}
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      {label}
    </button>
  );
}

export default Button;
