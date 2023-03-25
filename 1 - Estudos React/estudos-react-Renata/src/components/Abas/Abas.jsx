import "./Abas.css";
import { useState } from "react";

//useState é um hook
export function Abas() {
  /* let aba = "ajuda"; */
  /* [estado, função para alterar o estado] = estado inicial */

  const [aba, setAba] = useState("home");
  /* function irParaHome() {
    //definindo o estado da aba ativa p/ home
    setAba("home");
  }

  function irParaPerfil() {
    //definindo o estado da aba ativa p/ home
    setAba("perfil");
  }

  function irParaAjuda() {
    //definindo o estado da aba ativa p/ home
    setAba("ajuda");
  }
 */
  let conteudoAba; //conter o layout da aba selecionada

  if (aba === "home") {
    conteudoAba = <div>HOME</div>;
  } else if (aba === "perfil") {
    conteudoAba = <div>PERFIL</div>;
  } else if (aba === "ajuda") {
    conteudoAba = <div>AJUDA</div>;
  }

  
  console.log("O componente reconstruiu!");
  return (
    <div>
      {/* Com arrow n]ap precisamos definir as funções acima do componente */}
      <button onClick={() => setAba("home")}>Home</button>
      <button onClick={() => setAba("perfil")}>Perfil</button>
      <button onClick={() => setAba("ajuda")}>Ajuda</button>
      <hr />
      <div>{conteudoAba}</div>
    </div>
  );
}

/* if(aba === "home"){
    return (
        <div>
          <button>Home</button>
          <button>Perfil</button>
          <button>Ajuda</button>
          <hr />
          <div>Home</div>
        </div>
      ); 
}else if(aba === "perfil" ){
    return (
        <div>
          <button>Home</button>
          <button>Perfil</button>
          <button>Ajuda</button>
          <hr />
          <div>Perfil</div>
        </div>
      );
}else if(aba === "ajuda"){
    return (
        <div>
          <button>Home</button>
          <button>Perfil</button>
          <button>Ajuda</button>
          <hr />
          <div>Ajuda</div>
        </div>
      );
} */
