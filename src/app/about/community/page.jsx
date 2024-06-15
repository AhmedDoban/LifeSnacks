import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Testimonials from "@/app/(Home)/Testimonials/Testimonials";
import Donations57357 from "./Donations57357/Donations57357";
import DonationsMagdi from "./DonationsMagdi/DonationsMagdi";

function Page() {
  return (
    <div className="community">
      <Navbar />
      <Landing />
      <Donations57357 />
      <DonationsMagdi />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Page;
