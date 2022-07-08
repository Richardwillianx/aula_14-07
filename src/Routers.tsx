import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atividades from "./pages/Atividades";
import Home from "./pages/Home/index";
import Revisao from "./pages/Revisao";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revisao" element={<Revisao />} />
        <Route path="/atividades" element={<Atividades />} />
      </Routes>
    </BrowserRouter>
  );
}
