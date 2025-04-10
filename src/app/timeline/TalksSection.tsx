'use client';
import React from 'react';

export default function TalksSection() {
  const cardStyle = {
    background: '#FFF',
    border: '0',
    borderRadius: '0.5rem',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
    padding: '0',
    width: '100%',
    maxWidth: '300px',
    minWidth: '250px',
    margin: '8px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '0.5rem',
    transition: 'transform 0.3s ease-in-out',
  };

  const imageHoverStyle = {
    transform: 'scale(1.1)',
  };

  const images = ['/palestra1.jpg', '/palestra2.jpg', '/palestra3.jpg'];

  return (
    <div className="mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D9A066]">
        Palestras
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, idx) => (
          <div key={idx} style={cardStyle}>
            <img
              src={src}
              alt={`Palestra ${idx + 1}`}
              style={imageStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform =
                  imageHoverStyle.transform;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform =
                  'scale(1)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
