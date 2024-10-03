import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched vans data:', data); // Log the fetched data
        setVans(data.vans);
      })
      .catch(error => console.error('Error fetching vans:', error)); // Log any potential errors
  }, []);

  const hostVansEls = vans.map(van => (
    <Link key={van.id} to={`/host/vans/${van.id}`} className="block">
    <div className="w-full bg-white p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 hover:bg-slate-200 m-5 rounded-md">
      <div className="flex items-center sm:items-start sm:flex-row space-x-4">
        <div className="w-24 sm:w-28">
          <img className="rounded-md w-full h-auto" src={van.imageUrl} alt={van.name} />
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-5 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mt-3 text-black">{van.name}</h3>
          <p className="text-gray-700 font-normal ">${van.price}/day</p>
        </div>
      </div>
    </div>
  </Link>
  
  ));

  return (
    <div>
      <div >
    
        <h1 className='text-black p-3 font-bold text-4xl'>Your listed vans</h1>
       
      </div>
      <div className=" ">
        {vans.length > 0 ? (
          <section  >
            {hostVansEls}
          </section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
