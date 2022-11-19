import Home from "./pages/Home"
import Topic from "./pages/Topic"
import Results from "./pages/Results"
import ScrollToTop from "./components/ScrollToTop"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/t/:topic" element={<Topic />} />
      <Route path="/s/:searchKeyworkds" element={<Results />} />
      <Route path="/s" elemen={<Home />} /> 
    </Routes>
    </div>
  );
}

export default App;