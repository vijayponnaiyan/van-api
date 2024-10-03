import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Vandetil() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const getButtonStyle = (type) => {
    switch (type) {
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
    <div className="concort p-10">
      <div className="">
        <div className="px-4 sm:px-2 md:px-3 lg:px-4 xl:px-6">
          <Link to="/van">
            <p className="flex items-center text-black underline pt-10 text-lg cursor-pointer">
              <svg
                className="w-5 h-3 text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0l4 4M1 5l4-4"
                />
              </svg>
              Back to all vans
            </p>
          </Link>
        </div>

        <div className="mt-16 p-5">
          {van ? (
            <div className="">
              <div className="flex items-center justify-center">
                <img
                  className="w-full max-w-[90%] max-h-[850px] h-auto rounded-3xl object-cover"
                  src={van.imageUrl}
                  alt="Van"
                />
              </div>

              <button
                className="px-4 py-2 text-white rounded-md w-36 mt-14"
                style={getButtonStyle(van.type)}
              >
                {van.type}
              </button>

              <h2 className="text-2xl font-bold mt-4">{van.name}</h2>
              <p className="van-price text-xl mt-2">
                <span className="font-semibold">${van.price}</span>/day
              </p>
              <p className="text-lg mt-4">{van.description}</p>
              <div className="flex justify-center mt-6">
                <button className="bgbutton w-full  xl:max-w-[200px] link-button px-6 py-2 hover:bg-orange-600 text-white rounded-md">
                  Rent this van
                </button>
              </div>



            </div>
          ) : (
            <div  className='text-center   text-5xl  '    > 
            <h2   >Loading...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
