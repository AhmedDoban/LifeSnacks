function SearchBox({ SetSearchActive }) {
  return (
    <div className="SearchBox" >
      <div className="container">
        <div className="box" data-aos="zoom-in">
          <div className="head-search">
            <h1>What are you looking for ?</h1>
            <i
              className="fa-solid fa-xmark"
              onClick={() => SetSearchActive(false)}
            ></i>
          </div>
          <div className="search-section">
            <div className="input-box">
              <input type="search" name="" id="" placeholder="Search here..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBox;
