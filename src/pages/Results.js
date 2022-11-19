import Nav from "../components/Nav"
import Topics from "../components/Topics"
import ImagesGrid from "../images/ImagesGrid"
import { useLocation } from "react-router-dom"

function Results() {
  const location = useLocation()
  const path = location.pathname
  const title = path.slice(3, path.length).split('-').join(' ')
  return (
    <div>
      <div className="fixed">
        <Nav />
        <Topics />
      </div>
      <h1 style={{marginTop: "25vh", marginBottom: "15px"}}>{title}</h1>
      <ImagesGrid />
    </div>
  );
}

export default Results;