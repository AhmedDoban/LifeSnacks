import Navbar from "@/Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Footer from "@/Components/Footer/Footer";
import ReciepesItems from "./(Recipes-Items)/ReciepsItems";

function Page() {
  return (
    <div className="Reciepes">
      <Navbar />
      <Landing />
      <ReciepesItems />
      <Footer />
    </div>
  );
}
export default Page;
