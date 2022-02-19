import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Welcome from "./pages/Welcome";

//#1a78f2

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
