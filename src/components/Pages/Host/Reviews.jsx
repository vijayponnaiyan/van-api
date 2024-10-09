import React, { useEffect, useState } from 'react';
import Data from "../unit";  // Importing reviews data
import Rone  from '../Host/Rone';
import Rtwo from '../Host/Rtwo';


export default function Reviews() {
  const [car, setCar] = useState(Data.reviews || []); // Use fallback

  useEffect(() => {
    console.log(car); // Debugging: Check if car has the correct reviews data
  }, [car]);

  return (
    <div className="p-4 sm:p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3">Your reviews</h1>
        <p className="pt-2 sm:pt-3 md:pt-5 md:ml-5 text-sm sm:text-base md:text-lg">
          Last day <span className="underline">30 days</span>
        </p>
      </div>
        <div>
          < Rone />
        </div>
      {/* Review Count */}
      <div>
        <p className='p-5'>Reviews ({car.length})</p>
      </div>

      {/* Pass car data to Rtwo */}
      <div>
        <Rtwo reviews={car} />
      </div>
    </div>
  );
}
