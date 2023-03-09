import "./App.css";
import ReactDDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/HeaderBar/index";
import Home from "./pages/Home";
import Team from "./pages/Team/index";
import Vision from "./pages/Vision";
import Custom from "./pages/Custom/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vision" element={<Vision />} />
          <Route path="team" element={<Team />} />
          <Route path="custom" element={<Custom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
