import Navbar from "@/Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import OurBrands from "./OurBrands/OurBrands";
import OurStory from "./OurStory/OurStory";
import Testimonials from "./Testimonials/Testimonials";
import OurPartner from "@/Components/OurPartner/OurPartner";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Landing />
        <OurBrands />
        <OurStory />
        <Testimonials />
        <OurPartner />
        <Footer />
      </div>
    </>
  );
}
export default Home;
