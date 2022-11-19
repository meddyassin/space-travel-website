import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom';

function Background() {
  const location = useLocation();
  const path = location.pathname
  const slug = path.slice(3, path.length)
  const url = "https://api.unsplash.com/topics/" + slug + "?client_id=CIpRjDQzHO1fk2TzIrxKY4r6hZ-9FyLm3WHR5wUIQZc&count=90"
  
  const [topicData, setTopicData] = useState('')

  const fetchData = async () => {
    try {
      const data = await fetch(url)
      const dataJ = await data.json()
      setTopicData(dataJ)
    } catch {

    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  topicData && console.log(topicData.cover_photo.urls.small) 
  return (
    <div>
      <div className="background" style={topicData ? {backgroundImage: "url(" + topicData.cover_photo.urls.small + ")"} : {background: "gray"}}>
        <h2 className="background-title">{topicData.title}</h2>
        <p className="background-description">
          {topicData.description}
        </p>
      </div>
    </div>
  );
}

export default Background;
