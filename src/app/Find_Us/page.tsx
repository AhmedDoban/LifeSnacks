import Navbar from "@/Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Footer from "@/Components/Footer/Footer";
import Findtems from "./(find-Items)/Findtems";

function Page() {
  return (
    <div className="Find us">
      <Navbar />
      <Landing />
      <Findtems />
      <Footer />
    </div>
  );
}
export default Page;
