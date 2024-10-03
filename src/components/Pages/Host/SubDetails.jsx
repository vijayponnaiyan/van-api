import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function SubDetails() {
     const { currentVan } =useOutletContext(); 

  return (
    <>
     <div>
       <div> 
          <h4> <span>Name:</span><span>{currentVan.name}</span></h4>
          <h4><span>Category:</span><span> {currentVan.type}</span></h4>
          <h4><span>Description:</span>{currentVan.description}</h4>
          <h4>Visibility: Public</h4>
        </div>     
     </div>
    </>
  )
}
