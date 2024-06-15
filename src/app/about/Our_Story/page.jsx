import React from "react";
import Landing from "./Landing/Landing";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import TimeLine from './TimeLine/TimeLine';

function Page() {
  return (
    <div className="Our_Story">
      <Navbar />
      <Landing />
      <TimeLine />
      <Footer />
    </div>
  );
}
export default Page;
