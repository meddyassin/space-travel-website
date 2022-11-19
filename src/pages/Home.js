import Nav from "../components/Nav"
import Search from "../components/Search"
import Topics from "../components/Topics";
import ImagesGrid from "../images/ImagesGrid"

function Home() {
  
  return (
    <div>
      <div className="fixed">
        <Nav />
        <Topics />
      </div>
      <Search />
      <ImagesGrid />
    </div>
  );
}

export default Home;