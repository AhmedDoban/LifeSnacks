import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import NavigationInfo from "./NavigationInfo/NavigationInfo";
import Details from "./Details/Details";

function page() {
  return (
    <div className="JobOfferDetails">
      <Navbar />
      <NavigationInfo />
      <Details />
      <Footer />
    </div>
  );
}
export default page;
