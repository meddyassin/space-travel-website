import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Background from "../components/Background"
import Nav from "../components/Nav"
import Topics from "../components/Topics"
import ImagesGrid from "../images/ImagesGrid"

function Topic() {
  const location = useLocation()
  const path = location.pathname

  const [reRender, setReRender] = useState(1)
  useEffect(() => {
    setReRender(reRender + 1)
  }, [path])

  return (
    <div>
      <div className="fixed">
        <Nav />
        <Topics />
      </div>
      <Background />
      {reRender && <ImagesGrid />}
    </div>
  );
}

export default Topic;