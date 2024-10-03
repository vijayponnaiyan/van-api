import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function SubPhotos() {
  const { currentVan } =useOutletContext(); 

  return (
    <>
      <div>
        <h1>Photos:{currentVan.name} </h1>
        <img src={currentVan.imageUrl} alt={currentVan.name}   className='w-40  mt-5 ' srcset="" />
      </div>
    </>
  )
}
