import React from 'react'
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Specialmenu from '../Allmenus/Menmenu/Specialmenu';
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-2.jpg'

function Menutwo() {
  return (
    <>
      <Bredcrumb subtitle="Our Menu 2" title="DELICIOUS & AMAZING" Img={Img} />
      <Specialmenu />
      <Reservation />
    </>
  )
}

export default Menutwo