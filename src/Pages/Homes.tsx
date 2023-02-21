import React from "react"
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Mobile from "./Mobile";
import Offers from "./Offers";
import OurFeature from "./OurFeature";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Team from "./Team"
import Blog from "./Blog";
import HomeSlider from "./HomeSlider";


const Homes:React.FC = () => {
    return(
        <>
        <Header />
        <HomeSlider />
        <OurFeature />
        <AboutUs />
        <Offers />
        <Services />
        <Gallery />
        <Mobile />
        <Team />
        <Testimonials />
        <Blog />
        <Footer />
        </>
    )
}

export default Homes;