import React from 'react'
import Bredcom from '../Bredcrumb/Main'
import Book from '../../components/Menhome/Book'
import Img from '../../assets/images/background/banner-image-3.jpg'

function Main() {
  return (
    <>
      <Bredcom subtitle="Reservation" title="BOOK YOUR TABLE" Img={Img}/>  
      <Book />
    </>
  )
}

export default Main