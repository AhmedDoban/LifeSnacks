import LayoutWebsite from "./LayoutWebsite/index.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";
import logo from "../../../public/favicon.svg";
function page() {
  return (
    <LayoutWebsite>
      <div>
        <h2 className="h2Text mb-5">Best sellers</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 place-content-center ">
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
          <ProductCard
            image={logo}
            title="Margherita Pizza"
            subtitle="San Marzano Tomato Sauce, Basil, Olive Oil, Mozzarella Cheese"
            price="5.75"
          />
        </div>
      </div>
    </LayoutWebsite>
  );
}
export default page;
