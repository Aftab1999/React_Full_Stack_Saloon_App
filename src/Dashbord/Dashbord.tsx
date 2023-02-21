import React from "react"
import Charts from "./Charts";
import Header from "./Header";
import Footer from "./Footer";
import Booking from "./Booking"
import Category from "./Category"
import BestOffer from "./BestOffer"
import OurBlog from "./OurBlog";
import OurSpecialist from "./OurSpecialist";
import ImgGallery from "./ImgGallery";



const Dashbord:React.FC = () => {
    return(
        <>
        <Header />
        <Charts />
        <Booking />
        <Category />
        <BestOffer />
        <ImgGallery />
        <OurSpecialist />
        <OurBlog />
        <Footer />
        </>
    )
}


export default Dashbord;