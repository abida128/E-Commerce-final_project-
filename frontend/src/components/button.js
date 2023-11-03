import React from 'react';

function Button({ label, onClick }) {
  return (
    <button
      className="bg-[#ff5151] hover:bg-[#cc1818] text-white font-bold py-2 px-10 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
