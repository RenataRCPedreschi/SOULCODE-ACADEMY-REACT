import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home/Home";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { Root } from "./pages/Root/Root";
import { Section1 } from "./pages/Section1/Section1";
import { Section2 } from "./pages/Section2/Section2";
import { Section3 } from "./pages/Section3/Section3";
import { EditaUsuario } from "./pages/EditaUsuario/EditaUsuario";
import { Perfil } from "./pages/Perfil/Perfil";
import { Pokemon } from "./pages/Pokemon/Pokemon";
import { Herois } from "./pages/Herois/Herois";
import { EletroEquip } from "./pages/EletroEquip/EletroEquip";
import { Devs } from "./pages/Devs/Devs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="/section1" element={<Section1 />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/section3" element={<Section3 />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/edit/:id" element={<EditaUsuario />} /> {/* Parâmetro de rota */}
            <Route path="usuario/perfil/:id" element={<Perfil />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/pokemon" element={<Pokemon />} />

            <Route path="/herois" element={<Herois />} />

            <Route path="/eletronicos" element={<EletroEquip />} />

            <Route path="/devs" element={<Devs />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
