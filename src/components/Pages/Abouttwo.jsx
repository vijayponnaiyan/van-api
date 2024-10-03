import React from 'react';
import backGrounrd23 from '../Pages/images/im-61.png';

export default function Abouttwo() {
    return (
        <div className="concort">
            {/* Background Image */}
            <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
                <img
                    src={backGrounrd23}
                    className="object-cover w-full h-full"
                    alt="Background"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 md:p-10">
                {/* Headline */}
                <div className="text-center p-2 mt-5">
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-snug">
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                </div>

                {/* Paragraphs */}
                <div className="text-left md:text-center mt-5 space-y-4">
                    <p className="text-xl sm:text-lg font-medium">
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    </p>
                    <p className="text-xl sm:text-lg font-medium  move pt-2">
                        (Hitch costs extra 😉)
                    </p>
                    <p className="text-xl sm:text-lg font-medium mt-5">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                 <div className='bgbox   w-full   h-44  mt-12 rounded-lg' >
                    <div className='pt-3 p-10 ' >
                         <div className='text-left md:text-center' >
                             <h1 className='text-xl text-black font-bold leading-7  pt-6  sm:text-xl   ' >Your destination is waiting.<br />
                             Your van is ready.</h1> 
                        </div>  
                          <div className='mt-5  text-left md:text-center'>
                             <button  type='button'    className='  bg-black  text-white    p-2 w-52  rounded-xl'  >Explore our vans</button>
                          </div>

                    </div>
                </div>   
            </div>
        </div>
    );
}
