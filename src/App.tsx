import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import Homes from "./Pages/Homes";
import Offers from "./Pages/Offers";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import SeeAllServices from "./Pages/SeeAllServices";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header"
import Registration from "./Pages/Registration";
import Dashboard from "./Dashbord/Dashbord" 
import MoreCategory from "./Dashbord/MoreCategory"
import MoreOurBlog from "./Dashbord/MoreOurBlog";
import MoreBestOffer from "./Dashbord/MoreBestOffer";
import MoreOurSpecialist from "./Dashbord/MoreOurSpecialist";
import MoreBooking from "./Dashbord/MoreBooking";
import MoreImgGallery from "./Dashbord/MoreImgGallery";
import HairCut from "./Dashbord/HairCut";
import Bridal from "./Dashbord/Bridal";
import Profile from "./Dashbord/Profile";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/seeallservices" element={<SeeAllServices />} />
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/morecategory" element={<MoreCategory />} />
          <Route path="/moreourblog" element={<MoreOurBlog />} />
          <Route path="/morebestoffer" element={<MoreBestOffer />} />
          <Route path="/moreourspecialist" element={<MoreOurSpecialist />} />
          <Route path="/morebooking" element={<MoreBooking />} />
          <Route path="/moreimggallery" element={<MoreImgGallery />} />
          <Route path="/haircut" element={<HairCut />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;