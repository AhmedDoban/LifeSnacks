import Navbar from "@/Components/Navbar/Navbar";
import NavigationInfo from "./NavigationInfo/NavigationInfo";
import Footer from "@/Components/Footer/Footer";
import Details from "./Details/Details";


function Page() {
  return (
    <div className="ReciepesItemsDetails">
      <Navbar />
      <NavigationInfo />
      <Details />
      <Footer />
    </div>
  );
}
export default Page;
