import React from "react";
import { Link } from "react-router-dom";

export default function Notfount(){
   return (
          <>
             <div   className="pt-20   p-10 "  >
                <div className="aero flex    lg:items-center   lg:justify-center     sm:text-left "  >
                <h1  className="text-black     lg:text-4xl sm:text-3xl    md:text-2xl  font-bold  "  >Sorry, the page you were looking for was not found.</h1> 
                </div>
                  <div>
                    <Link 
                     to=".."
                     path="/"
                    >
                     <div className='aero flex items-center justify-center  pt-5 ' >
                        <button class=" ml-10 mr-10 w-96 bg-black   text-white font-bold py-2 px-4 rounded">
                        Return to home
                        </button>
                    </div>
                     </Link> 
                  </div>
             </div>
          </>
   )
};