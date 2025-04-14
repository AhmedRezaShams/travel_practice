'use client';

import React from 'react';
import Image from 'next/image'; // Import Image for better optimization

export default function IconButton({
  icon,
  text,
  height = 'h-12',
  width = 'w-30',
  onClick,
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-[#FF5400] text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ${height} ${width} ${className}`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={20} // Adjust width as needed
          height={20} // Adjust height as needed
          className="inline-block"
        />
      )}
      <span className="text-lg font-bold font-mulish">{text}</span>
    </button>
  );
}
