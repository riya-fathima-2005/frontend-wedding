import React from 'react'
import Gallerybanner from './Gallerybanner'
import Gallerygall from './Gallerygall'
import Cultural from './Cultural'
import Food from './Food'
import Accommodation from './Accommodation'

const Gallery = () => {
  return (
    <div>
      <Gallerybanner/>
      <Gallerygall/>
      <Cultural/>
      <Food/>
      <Accommodation/>
    </div>
  )
}

export default Gallery
