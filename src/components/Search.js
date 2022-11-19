import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const searchIcon = (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
      style={{ width: "1.55rem", height: "1.55rem", background: "white" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );

  const [query, setQuery] = useState("");
  const [background, setBackground] = useState();
  const backgroundImage = "https://api.unsplash.com/search/photos?page=1&query=summer&client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc";

  // fetching a background image
  const fetchBackground = async () => {
    try {
      const data = await fetch(backgroundImage);
      const dataJ = await data.json();
      setBackground(dataJ.results);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchBackground();
  }, []);

  let backgroundArray = [];
  background &&
    background.map((item) => {
      backgroundArray.push(item.urls.small);
    });
  
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query)
    navigate('/s/' + query.split(' ').join('-'));
    console.log('hi')
  }

  return (
    <div
      className="search"
      style={
        backgroundArray
          ? { backgroundImage: "url(" + backgroundArray[3] + ")" }
          : { background: "red" }
      }
    >
      <h2>unsplash Clone</h2>
      <p>
        this website is powered by Unsplash API, Unsplash is The internet’s
        source of freely-usable images. Powered by creators everywhere.
      </p>
      <div className="search-box">
        <form
          className="search-box-container"
          style={{ marginTop: "16px", width: "100%" }}
          onSubmit={handleSubmit}
        >
          {searchIcon}
          <input
            style={{
              background: "white",
              borderRadius: "0",
              height: "50px",
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Search photos"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;