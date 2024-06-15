import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import Landing from "./Landing/Landing";
import Form from "./Form/Form";
import FQDropdown from "./F&QDropdown/FQDropdown";

function Page() {
  return (
    <div className="Contact_us">
      <Navbar />
      <Landing />
      <Form />
      <FQDropdown />
      <Footer />
    </div>
  );
}
export default Page;
