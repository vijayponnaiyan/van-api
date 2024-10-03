import React from 'react'
import backgroundImage from '../Pages/images/im-53.png';


export default function Hometown() {
    return (
        <>
            <div>
                <div className='bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', width: '100%', }}>
                    <div className="text-white text-center p-5 font-extrabold pt-28 sm:pt-28 md:pt-28 lg:pt-28  ">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl leading-7 ">
                            You got the travel plans, we got the travel vans.
                        </h1>
                    </div>
                    <div className="text-center p-20 text-white pt-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                        <p className=" leading-5 text-center   text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl  ">
                            Add adventure to your life by joining the #vanlife movement. < br />Rent the perfect van to make your perfect road trip.
                        </p>
                    </div>
                    <div className='aero flex items-center justify-center  ' >
                        <button class=" ml-10 mr-10 w-96 bgbutton hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                        Find your van
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}
