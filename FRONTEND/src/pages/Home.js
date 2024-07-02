import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      {/* <BannerProduct/> */}

      <HorizontalCardProduct category={"Ruled Note"} heading={"Ruled Note"}/>
      <HorizontalCardProduct category={"Unruled Note"} heading={"Unruled Note"}/>

      <VerticalCardProduct category={"Pen"} heading={"Pen"}/>
      <VerticalCardProduct category={"Pencil"} heading={"Pencil"}/>
      <VerticalCardProduct category={"Eraser"} heading={"Eraser"}/>
      <VerticalCardProduct category={"Sharpner"} heading={"Sharpner"}/>
      <VerticalCardProduct category={"Colouring Products"} heading={"Colouring Products"}/>
      <VerticalCardProduct category={"Chart Paper"} heading={"Chart Paper"}/>
      <VerticalCardProduct category={"Ruler"} heading={"Ruler"}/>
      <VerticalCardProduct category={"Pencil Box"} heading={"Pencil Box"}/>
    </div>
  )
}

export default Home