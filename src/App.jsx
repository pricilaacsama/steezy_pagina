import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarSteezy from "./components/NavbarSteezy";
import VideoGrid from "./components/VideoGrid";
import './App.css'

function App() {
  const years = [2022, 2023, 2024, 2025];

  return (
    <BrowserRouter>
      <NavbarSteezy/>
      <Routes>
        {years.map((y) => (
          <Route key={y} path={`/${y}`} element={<VideoGrid year={y} />} />
        ))}
        <Route path="*" element={<Navigate to="/2025" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
