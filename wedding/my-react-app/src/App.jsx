import "./App.css";

import { Routes, Route } from "react-router-dom";

// NAVBAR & FOOTER
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

// PAGES
import Home from "./Components/Home/Home";
import Wedding from "./Components/Weddingpage/Wedding";
import Aboutpage from "./Components/AboutPage/Aboutpage";
import Gallery from "./Components/Gallery/Gallery";
import Costume from "./Components/Costumes/Costume";
import Faqcontent from "./Components/Faqpage/Faqcontent";
import Hostsec from "./Components/Host/Hostsec";
import Blogpage from "./Components/Blogpage/Blogpage";
import Subblog from "./Components/Subblog/Subblog";
import Subblogss from "./Components/Subblogs/Subblogss";
import Christians from "./Components/Celebrations/Celebrations";
import Contacted from "./Components/Contacting/Contacted";
import Howtohost from "./Components/Howhost/Howtohost";
import Hostdetails from "./Components/Howhost/Hostdetails";

// AUTH
import Login from "./Components/Login/Login";
import Sign from "./Components/Sign/Sign";

// VENUE
import Venue from "./Components/Venue/Venue";
import Venuegallary from "./Components/Venue/Venuegallary";


import Morevenueside from "./Components/Morevenue/Morevenueside";

// MORE VENUE
import Morevenue1 from "./Components/Morevenue/Morevenue1";
import Morevenue2 from "./Components/Morevenue/Morevenue2";
import Morevenue3 from "./Components/Morevenue/Morevenue3";
import Morevenue4 from "./Components/Morevenue/Morevenue4";
import Morevenue5 from "./Components/Morevenue/Morevenue5";
import Morevenue6 from "./Components/Morevenue/Morevenue6";
import Payment from "./Components/Payment/Payments";
import Success from "./Components/Payment/Success";
import WeddingDetails from "./Components/Weddingpage/WeddingDetails";

// RESERVE
import Reserve from "./Components/Morevenue/Reserve";
import MyBookings from "./Components/Morevenue/MyBookings";

// PROTECTED ROUTE
import ProtectedRoute from "./Components/ProtectedRoute";
import Smallprofile from "./Components/Navbar/Smallprofile";


function App() {
  return (
    <>
      {/* NAVBAR */}
      <Nav />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PAGES */}
        <Route path="/wedding" element={<Wedding />} />

        <Route path="/faqqq" element={<Faqcontent />} />

        <Route path="/about" element={<Aboutpage />} />

        <Route path="/gallery" element={<Gallery />} />

        {/* <Route
          path="/costumes"
          element={<Costume />}
        /> */}

        <Route path="/host" element={<Hostsec />} />

        <Route path="/blog" element={<Blogpage />} />

        <Route path="/blogs" element={<Subblog />} />

        <Route path="/blogss" element={<Subblogss />} />

        <Route path="/christ" element={<Christians />} />

        <Route path="/contact" element={<Contacted />} />

        <Route path="/hostdetails" element={<Hostdetails />} />

        <Route path="/howhost" element={<Howtohost />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<Success />}/>
        <Route path="/wedding-details" element={<WeddingDetails />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        <Route path="/sign" element={<Sign />} />
        


<Route
  path="/morevenue/:id"
  element={
    <ProtectedRoute>
      <Morevenueside />
    </ProtectedRoute>

 
  }
/>

{/* 
        {/* PROTECTED VENUE */}
        <Route
          path="/venue"
          element={
            <ProtectedRoute>
              <Venue />
            </ProtectedRoute>
          }
        />

          {/* MY BOOKINGS */}

<Route path="/my-bookings" element={<MyBookings />} />

        {/* <Route
          path="/morevenue/1"
          element={
            <ProtectedRoute>
              <Morevenue1 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morevenue/2"
          element={
            <ProtectedRoute>
              <Morevenue2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morevenue/3"
          element={
            <ProtectedRoute>
              <Morevenue3 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morevenue/4"
          element={
            <ProtectedRoute>
              <Morevenue4 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morevenue/5"
          element={
            <ProtectedRoute>
              <Morevenue5 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morevenue/6"
          element={
            <ProtectedRoute>
              <Morevenue6 />
            </ProtectedRoute>
          }
        />  */}

        {/* RESERVE */}
        <Route
          path="/reserve"
          element={
            <ProtectedRoute>
              <Reserve />
            </ProtectedRoute>
          }
        />

        {/* VENUE GALLERY */}
        <Route
          path="/venuegallary"
          element={
            <ProtectedRoute>
              <Venuegallary />
            </ProtectedRoute>
          }
        />
        <Route path="/Smallprofile" element={<Smallprofile/>}/>
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
