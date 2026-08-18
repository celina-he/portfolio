import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { Illustrations } from "./pages/illustrations/Illustrations";
import { CoolStuff } from "./pages/cool-stuff/CoolStuff";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/cool-stuff" element={<CoolStuff />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}

export default App;