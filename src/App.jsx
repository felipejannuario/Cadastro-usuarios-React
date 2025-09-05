import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import Login from "./pages/Login"; // 👈 importa a tela de login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista-de-usuarios" element={<ListUsers />} />
        <Route path="/login" element={<Login />} /> {/* 👈 rota de login */}
      </Routes>
    </Router>
  );
}

export default App;
