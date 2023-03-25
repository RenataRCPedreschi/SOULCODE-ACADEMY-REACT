import "./Sorteador.css";
import { useState } from "react";

export function Sorteador() {
  const [resultado, setResultado] = useState(0);

  function sortear() {
    //manipuladora de evento

    let numero = Math.floor(Math.random() * 100);
    //chama atualização do componente
    setResultado(numero);
  }

  /* console.log("Componente reconstruiu " + new Date().toTimeString
    ()); */
  
 /*    let h2Class;
  if (resultado % 2 === 0) {
    h2Class = "par";
  } else {
    h2Class = "impar";
  } */

  
  return (
    <div className="sorteador">
      <h2 >Sorteador</h2>
      <p className={resultado % 2 ===0 ? "par": "impar"}>{resultado}</p>
      <button onClick={sortear}>Gerar</button>
    </div>
  );
}
