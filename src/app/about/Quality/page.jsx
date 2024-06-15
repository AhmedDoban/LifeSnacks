import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Landing from "./Landing/Landing";
import Certificates from "./Certificates/Certificates";
import Tasting from "./Tasting/Tasting";
import Our_Quality from "./Our_Quality/Our_Quality";

function Page() {
  return (
    <div className="Quality">
      <Navbar />
      <Landing />
      <Certificates />
      <Tasting />
      <Our_Quality />
      <Footer />
    </div>
  );
}
export default Page;
