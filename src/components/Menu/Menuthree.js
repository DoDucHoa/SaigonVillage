import React from 'react'
import Offers from '../Allmenus/FirstMenu/Offers'
import Reservation from '../Allmenus/FirstMenu/Reservation'
import Appetizers from '../Allmenus/Thrdmenu/Appetizers'
import Privateevent from '../Allmenus/Thrdmenu/Privateevent'
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/background/banner-image-2.jpg'

function Menuthree() {
  return (
    <>
      <Bredcrumb subtitle="Our Menu 3" title="DELICIOUS & AMAZING" Img={Img} />
      <Appetizers />
      <Privateevent />
      <Offers />
      <Reservation />
    </>
  )
}

export default Menuthree