"use client";
import LayoutWebsite from "./LayoutWebsite/index.jsx";
import { useState } from "react";
import AllProducts from "./All Products/AllProducts.jsx";
import Scrunch from "./Scrunch/Scrunch.jsx";
function Page() {
  const [Filter, SetFilter] = useState("All brands");
  return (
    <LayoutWebsite Filter={Filter} SetFilter={SetFilter}>
      {Filter === "All brands" && <AllProducts />}
      {Filter === "Scrunch" && <Scrunch />}
    </LayoutWebsite>
  );
}
export default Page;
