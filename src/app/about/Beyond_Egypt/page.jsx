import React from "react";
import Landing from "./Landing/Landing";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Exports from "./Exports/Exports";

function Page() {
  return (
    <div className="Our_Story">
      <Navbar />
      <Landing />
      <Exports />
      <Footer />
    </div>
  );
}
export default Page;
