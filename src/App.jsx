import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lista-de-usuarios" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
