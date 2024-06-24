"use client";
import LayoutWebsite from "./LayoutWebsite/index.jsx";
import { useState } from "react";
import AllProducts from "./All Products/AllProducts.jsx";
function Page() {
  const [Filter, SetFilter] = useState("All brands");
  return (
    <LayoutWebsite Filter={Filter} SetFilter={SetFilter}>
      {Filter === "All brands" && <AllProducts />}
    </LayoutWebsite>
  );
}
export default Page;
