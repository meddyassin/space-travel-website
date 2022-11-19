import { useState, useEffect } from "react";
import Image from "./Image"
import {useLocation} from 'react-router-dom';


const ImagesGrid = () => {
  const location = useLocation();
  const path = location.pathname
  const APIparams = path.slice(1, 2)
  const slug = path.slice(3, path.length)
  const query = path.slice(3, path.length)

  let url = ''

  if (APIparams == "t") {
    url = "https://api.unsplash.com/topics/" + slug + "/photos?client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&per_page=30"
  } else if (APIparams == "s") {
    url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&per_page=30`;
  } else {
    url = "https://api.unsplash.com/photos/random/?client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&count=30"
  }

  const [res, setRes] = useState();
  const fetchRequest = async () => {
    try {
      const data = await fetch(url);
      const dataJ = await data.json();
      setRes(dataJ)
    } catch (err) {
      fetchError();
    }
  };

  res && console.log(res.results)

  const [isFailed, setIsFailed] = useState(false);
  function fetchError() {
    setIsFailed(true);
  }

  useEffect(() => {
    fetchRequest();
  }, [slug]);

  // deviding the res array into 3 arrays
  // I stored the res in a res1 array so that I can keep the origin array for latter
  
  const res1 = ((APIparams == "s") && res) ? res.results : res
  const threeGrid1 = res1 && res1.filter((i, index) => (index < 10))
  const threeGrid2 = res && res1.filter((i, index) => (index >= 10 && index < 20))
  const threeGrid3 = res && res1.filter((id, index) => (index >= 20))

  const res2 = ((APIparams == "s") && res) ? res.results : res
  const twoGrid1 = res && res2.filter((i, index) => index < 14)
  const twoGrid2 = res && res2.filter((i, index) => index > 14)

  const res3 = ((APIparams == "s") && res) ? res.results : res

  // when we are on phone screen, I'll just use the res array
  return (
    <div>

      <div className="three_grids_container">
          <div className="images">
            {res ? threeGrid1.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
          <div className="images">
            {res ? threeGrid2.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
          <div className="imagess">
            {res ? threeGrid3.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
      </div>

      <div className="two_grids_container">
          <div className="images">
            {res ? twoGrid1.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
          <div className="images">
            {res ? twoGrid2.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
      </div>

      <div className="one_grid_container">
          <div className="images">
            {res ? res3.map((image) => { return <Image url={image.urls.small}/> }) : isFailed ? "failed to fetch" : "loading ..."}
          </div>
      </div>

    </div>
  );
};

export default ImagesGrid;