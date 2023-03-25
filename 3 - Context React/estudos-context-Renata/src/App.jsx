import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Perfil } from "./pages/Perfil/Perfil";
import { Login } from "./pages/Login/Login";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

export function App() {
  //true = tema escuro ativo
  //false = tema claro ativo
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternar() {
    //alternar entre true e false
    //toda vez que for chamado
    if (temaEscuro === true) {
      setTemaEscuro(false);
    } else {
      setTemaEscuro(true);
    }
  }
  return (
    <ThemeContext.Provider
      value={{ temaEscuro: temaEscuro, alternar: alternar }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
