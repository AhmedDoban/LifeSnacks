import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import OurValues from "@/Components/Our Values/OurValues";
import Landing from "./Landing/Landing";
import OurMission from "./Our_Mission/OurMission";
import OurVision from "./Our_Vision/OurVision";

function Page() {
  return (
    <div className="Our_Values">
      <Navbar />
      <Landing />
      <OurValues />
      <OurMission />
      <OurVision />
      <Footer />
    </div>
  );
}
export default Page;
