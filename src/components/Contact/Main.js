import React from 'react'
import Contactbanner from '../Mencontactus/Contactbanner'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-4.jpg'

function Main() {
  return (
    <>
      <Bredcrumb title="ANY QUERY ?" subtitle="Contact Us" Img={Img} />
      <Contactbanner />
    </>
  )
}

export default Main
