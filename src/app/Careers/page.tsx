import Navbar from "@/Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Footer from "@/Components/Footer/Footer";
import JobOffers from "./(Job offer)/JobOffers";
import OurPartner from "../../Components/OurPartner/OurPartner";
import OurValues from "@/Components/Our Values/OurValues";

function Page() {
  return (
    <div className="Reciepes">
      <Navbar />
      <Landing />
      <JobOffers />
      <OurValues />
      <OurPartner />
      <Footer />
    </div>
  );
}
export default Page;
