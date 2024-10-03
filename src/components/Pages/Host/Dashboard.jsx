import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Dashboardreview from '../Host/Dashboardreview';

export default function Dashboard() {
  // State to control the collapse
  const [isOpen, setIsOpen] = useState(false);
  const [vans, setVans] = useState([]);

  // Function to toggle the collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Fetching van data
  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched vans data:', data); // Log the fetched data
        setVans(data.vans);
      })
      .catch((error) => console.error('Error fetching vans:', error)); // Log any potential errors
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link key={van.id} to={`/host/vans/${van.id}`} className="block">
      <div className="w-full bg-white p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 hover:bg-slate-200 m-5 rounded-md">
        <div className="flex items-center sm:items-start sm:flex-row space-x-4">
          <div className="w-24 sm:w-28">
            <img
              className="rounded-md w-full h-auto"
              src={van.imageUrl}
              alt={van.name || 'Van image'}
            />
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-5 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-black">
              {van.name}
            </h3>
            <p className="text-gray-700 font-normal">${van.price}/day</p>
          </div>
        
        </div>
      
      </div>
     
    </Link>
  ));

  return (
    <>
      <div className="bg-cloth p-10">
        <div>
          <h1 className="text-black p-3 font-bold text-4xl">Welcome!</h1>
        </div>
        <div className="p-5">
          <div>
            <p>
              Income last <span className="underline">30 days</span>{' '}
            </p>
          </div>

          <div className="py-2">
            {/* Button to toggle the collapse */}
            <div
              onClick={toggleCollapse}
              className="text-black px-4 py-2 rounded-md focus:outline-none float-right -mt-12 cursor-pointer"
            >
              {isOpen ? 'Hide Details' : 'Show Details'}
            </div>
          </div>

          {/* Collapsible content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-full' : 'max-h-0'
            }`}
          >
            <p className="p-4 text-gray-700 text-center">
              Detailed income breakdown: Your income over the past 30 days is
              <strong> $5,000</strong>, with an increase of 15% compared to the
              previous month.
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-5xl font-bold">$2,260</p>
        </div>
      </div>

      <div className="p-12 bg-cloth2">
        <Dashboardreview />
      </div>

      <div className='p-5' >
      <div>
        <h1 className='text-black p-5 font-bold text-4xl'>Your listed vans</h1>
      </div>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2> // You can replace this with a spinner or a loader
        )}
      </div>
    </>
  );
}
