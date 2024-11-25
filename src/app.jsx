import { Routes, Route } from "react-router-dom";
import { Navbars } from "./compoents/NavBar";
import { HeroSection } from "./files/HeroSection";
import { Step } from "./files/Step";
import { Content } from "./files/Content";
import Contact from "./files/Feadback";
import { Login } from "./files/Login_page";
import { GetApp } from "./files/GetApp";
import { Pricing } from "./files/Pricing";
import { Signup } from "./compoents/Signup";
import { Team } from "./files/Team";
import { Footer } from "./compoents/Footer";
import { Trusted } from "./files/Trusted";
// import { Analytics } from "@vercel/analytics/react"

export function App() {
  return (
    <>
    
      <Navbars />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Trusted />
              <Step />
              <Content />
              <Team />
              <Contact />
              {/* <GetApp /> */}
              <Pricing />
            </>
          }
        />
        <Route path="/about" element={<Content />} />
        <Route path="/services" element={<Step />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/getapp" element={<GetApp />} />
      </Routes>

      <Footer />
    </>
  );
}
