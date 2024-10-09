import React from 'react'
import Reservation from '../Allmenus/FirstMenu/Reservation'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-2.jpg'
import Menusection from '../Menhome/Menusection'


function Menufour() {
  return (

    <>
      <Bredcrumb subtitle="Our Menu 4" title="DELICIOUS & AMAZING" Img={Img} />
      <Menusection/>
      <Reservation />
    </>

  )
}

export default Menufour