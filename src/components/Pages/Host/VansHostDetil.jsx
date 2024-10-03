import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function VansHostDetil() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

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
    <section className="container mx-auto p-5">
      <Link to=".." relative="path">
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

      <div className="bg-white rounded-md p-7 mt-10">
        <div className="flex flex-col md:flex-row">
          <img className="w-full md:w-52" src={currentVan.imageUrl} alt={`${currentVan.name}`} />
          <div className="host-van-detail-info-text pl-0 md:pl-10 mt-5 md:mt-0">
            <button
              style={getButtonStyle(currentVan.type)}
              className="px-4 py-2 text-white rounded-md w-36"
            >
              {currentVan.type}
            </button>
            <h3 className="font-bold text-4xl mt-5">{currentVan.name}</h3>
            <h4 className="text-lg mt-2">${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="mt-10 flex space-x-4 border-b-2 border-gray-200 pb-2">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="SubPricing"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="SubPhotos"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600"
            }
          >
            Photos
          </NavLink>
        </nav>

        <div className="mt-10">
        <Outlet    context={{ currentVan }}   />
      </div>

      </div>

    
    </section>
  );
}
