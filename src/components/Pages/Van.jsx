// Van.js
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link  } from 'react-router-dom';
import { fetchData } from './Api'; // Import the function
import Vanone from '../Pages/Vanone';




export default function Van() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
    async function loadVans() {
      try {
        const data = await fetchData(); // Use the fetchData function
        setVans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  // Get filter from URL search params
  const typeFilter = searchParams.get('type');

  // Filter vans based on the selected filter
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error: {error.message}</p>;
  }

  return (
    <div className="bgnvan">
      <div className="p-5">
        <div className="mx-4 md:mx-12 text-2xl md:text-3xl font-bold">
          <h1 className="text-black">Explore our van options</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start mt-4">
          <div className="px-2 md:px-10 mb-4">
            <Link
              to="?type=simple"
              state={{ search: searchParams.toString() }}
            >
              <button className="hover:shadow-2xl opacity-75 p-2 w-24 text-neutral-800 but rounded-md simple">
                Simple
              </button>
            </Link>
          </div>
          <div className="px-2 md:px-10 mb-4">
            <Link
              to="?type=luxury"
              state={{ search: searchParams.toString() }}
            >
              <button className="hover:shadow-2xl opacity-75 p-2 w-24 text-neutral-800 but rounded-md Luxury">
                Luxury
              </button>
            </Link>
          </div>
          <div className="px-2 md:px-10 mb-4">
            <Link
              to="?type=rugged"
              state={{ search: searchParams.toString() }}
            >
              <button className="hover:shadow-2xl opacity-75 p-2 w-24 text-neutral-800 but rounded-md Rugged">
                Rugged
              </button>
            </Link>
          </div>
          <Link to="." state={{ search: searchParams.toString() }}>
            <div className="px-2 md:px-10 mb-4">
              <p className="hover:shadow-2xl opacity-75 cursor-pointer text-neutral-800 p-2 underline">
                Clear filters
              </p>
            </div>
          </Link>
        </div>

        {/* Display Vans */}
        <div className="flex flex-wrap justify-center">
          {filteredVans.length > 0 ? (
            filteredVans.map((van) => (
              <Vanone
                key={van.id}
                id={van.id}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
                state={{ search: searchParams.toString() }}
              />
            ))
          ) : (
            <p>No vans available</p>
          )}
        </div>
      </div>
    </div>
  );
}
