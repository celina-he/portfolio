import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { Illustrations } from "./pages/illustrations/Illustrations";
import { CoolStuff } from "./pages/cool-stuff/CoolStuff";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/cool-stuff" element={<CoolStuff />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;