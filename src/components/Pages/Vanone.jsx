import React from 'react';
import { Link } from 'react-router-dom';

export default function Vanone({ id, imageUrl, name, price, type, searchParams }) {
  const handleRentNow = (id) => {
    console.log(`Renting van with ID: ${id}`);
    // Additional logic for renting the van
  };

  const getButtonStyle = (type) => {
    switch(type) {
      case 'rugged':
        return { backgroundColor: 'rgba(17, 94, 89, 1)' };
      case 'luxury':
        return { backgroundColor: 'rgba(22, 22, 22, 1)' };
      case 'simple':
        return { backgroundColor: 'rgba(225, 118, 84, 1)' };
      default:
        return { backgroundColor: 'gray' };
    }
  };

  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
      <Link 
        to={`/vans/${id}`} 
     
        state={{ search: searchParams }} // Use the searchParams passed from Van.js
      >
        <div className={`hover:shadow-2xl border rounded-lg overflow-hidden shadow-lg ${type === 'luxury' ? 'border-gold' : 'border-gray-300'}`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-48 object-cover" 
            onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} 
          />
          <div className="p-4">
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold">{name}</h2>
              <span className="text-lg font-semibold leading-none">${price} <br/>/day</span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <button 
                className="px-4 py-2 text-white rounded-md w-24"
                style={getButtonStyle(type)}
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation if needed
                  handleRentNow(id);
                }}
              >
                {type}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
