import React from 'react';


function Button( { label }) {
  
 

  return (
    <button className='px-4 py-2.5 text-white font-semibold rounded-3xl text-sm bg-[#1c1c1c] transition hover:opacity-80'>
      {label}
    </button>
  );
}

export default Button;
