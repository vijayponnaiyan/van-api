import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function SubPricing() {
  const { currentVan } =useOutletContext(); 

  return (
    <>
     <div>
        <h4>pricing:{currentVan.price}/day </h4>
     </div>
    </>
  )
}
