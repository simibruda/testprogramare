import React from "react";
import AllPestPage from "./JSComp/AllPestPage";
import BodyMessage from "./JSComp/BodyMessage";
import ContactUs from "./JSComp/ContactUs";
import ExcelTermite from "./JSComp/ExcelTermite";
import ExcelYard from "./JSComp/ExcelYard";
import Footer from "./JSComp/Footer";
import HomeDog from "./JSComp/HomeDog";
import MemorialSloan from "./JSComp/MemorialSloan";
import ServiceAreas from "./JSComp/ServiceAreas";
import TrustCertification from "./JSComp/TrustCertification";
import VideoSection from "./JSComp/VideoSection";

function Home() {
  return (
    <div>
      <HomeDog />
      <BodyMessage />
      <ExcelYard />
       <AllPestPage />
     <VideoSection />
      <ExcelTermite />
      <MemorialSloan />
      <TrustCertification />
      <ServiceAreas />
     <ContactUs />
   <Footer />
    </div>
  );
}

export default Home;
