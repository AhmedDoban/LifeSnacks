import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Landing from "./Landing/Landing";
import OurPartner from "@/Components/OurPartner/OurPartner";
import AboutSustainability from "./AboutSustainability/AboutSustainability";
import Details from './Details/Details';

function Page() {
  return (
    <div className="sustainability">
      <Navbar />
      <Landing />
      <AboutSustainability />
      <Details />
      <OurPartner />
      <Footer />
    </div>
  );
}
export default Page;
