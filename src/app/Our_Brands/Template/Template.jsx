import Landing from "./Landing/Landing";
import About from "./About/About";
import Products from "./Products/Products";

function Template({ DummyProducts ,backgroundColor ,BrandName ,BrandLogo ,AboutImage ,BackGround}) {
  return (
    <div className="OurBrandsTemplate">
      <Landing
        BackGround={BackGround}
        logo={BrandLogo}
      />
      <About
        backgroundColor={backgroundColor}
        BrandName={BrandName}
        BrandLogo={BrandLogo}
        AboutImage={AboutImage}
      />
      <Products backgroundColor={backgroundColor} DummyProducts={DummyProducts} />
    </div>
  );
}
export default Template;
