import React from 'react'
import { useState } from 'react'

export default function ImageSection({ images }) {

  return (
    <>
    {/* MAIN IMAGE */}
    <div className="container w-75">
      <img src={images} alt="" className='img-fluid' />
    </div>

    
    </>
  )
}
