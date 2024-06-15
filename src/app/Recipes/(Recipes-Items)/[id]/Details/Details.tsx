import Image from "next/image";
import "./Details.css";

function Details() {
  return (
    <div className="RecipesDetails">
      <div className="container">
        <div className="details-img">
          <Image width={800} height={400} alt="Recipes" src="/Recipes.jpeg" />
          <i className="fa-solid fa-play PlayVideo"></i>
        </div>
        <div className="box">
          <h3>By Crumbli</h3>
          <div className="more-details">
            <h1>Chocolate donuts</h1>
            <div className="timing">
              <div className="box">
                <i className="fa-solid fa-clock"></i>
                <span>Prep:</span>
                <span>:40m</span>
              </div>
              <div className="box">
                <i className="fa-solid fa-cookie-bite"></i>
                <span>cook::</span>
                <span>20m</span>
              </div>
            </div>
          </div>
        </div>
        <div className="style-2">
          <h4>Ingredients</h4>
          <ul className="Check">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="style-2">
          <h4>Directions</h4>
          <ul className="Number">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quasi saepe animi dolores molestias repudiandae facilis ipsum,
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Details;
