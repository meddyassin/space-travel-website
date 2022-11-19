import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Topics() {
  const [res, setRes] = useState();
  const allTopics =
    "https://api.unsplash.com/topics/?client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&per_page=21";
  const topicImages =
    "https://api.unsplash.com/topics/wallpapers/photos/?client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&count=100";

  const fetchRequest = async (url) => {
    try {
      const data = await fetch(url);
      const dataJ = await data.json();
      setRes(dataJ);
    } catch {
      
    }
  };

  useEffect(() => {
    fetchRequest(allTopics);
  }, []);

  return (
      <header className="header">
        <span className="editorial">Editorial</span>
        <div className="line"></div>
        <nav className="vertical-align-middle scroll">
          {res
            ? res.map((topic) => {
                return (
                  <span key={topic.id} className="nav-item" onClick={fetchRequest}>
                    <Link to={"/t/" + topic.slug}>{topic.title}</Link>
                  </span>
                );
              })
            : "loading ..."}
        </nav>
      </header>
  );
}

export default Topics;