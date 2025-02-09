import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "@/components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}

export default App;
