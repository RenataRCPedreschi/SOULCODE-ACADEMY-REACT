import { useEffect, useState } from "react";
import "./ConversorMedida.css";


export function ConversorMedida(){
  const [metro, setMetro] = useState(0);   
  const [milimetro, setMilimetro] = useState(0);
  const [centimetro, setcentimetro] = useState(0);
  const [kilometro, setKilometro] = useState(0);

  useEffect (() => {
    const conversaoMilimetro = Number(metro) *1000;
    const conversaoCentimetro = Number(metro) *100;
    const conversaoKilometro = Number(metro)/1000;
    setMilimetro(conversaoMilimetro);
    setcentimetro(conversaoCentimetro);
    setKilometro(conversaoKilometro);
  }, [metro])

  return(
    <div className="conversor">
      <input
        type="number"
        placeholder="Distância em Metros"
        onChange={(evento) => setMetro(evento.target.value)}
      />
      <p>Valor digitado: {metro} m</p>
      <p>Distância em milímetros: {milimetro} mm</p>
      <p>Distância em centímetros: {centimetro} cm</p>
      <p>Distância em quilometro:{kilometro} km</p>
    </div>
  );
  
}