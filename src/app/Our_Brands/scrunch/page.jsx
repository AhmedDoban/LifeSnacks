import Template from "./../Template/Template";
import { DummyProducts } from "./Dummy.js";

function Page() {
  return (
    <Template
      DummyProducts={DummyProducts}
      backgroundColor="#C2273E"
      BrandName="Scrunch"
      BrandLogo={"/Navbar/scrunches.png"}
      AboutImage={"/Scrunch/SctunchAbout.png"}
      BackGround={"/Scrunch/SctunchLanding.png"}
    />
  );
}
export default Page;
