import { useEffect, useState } from "react";
import "./ConversorTemp.css";

//Efeitos = ações secundárias

export function ConversorTemp() {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [tempK, setTempK] = useState(0);

  //Exercicio: Adicionar conversão para Kelvin no efeito
  // e mostrar no return. k = C - 273.

  useEffect(() => {
    //quando a tempC fpr alterada, essa função/efeito
    //será executado automaticamente.
    const resultadoConversaoKelvin = Number(tempC) + 273;
    const resultadoConversao = Number(tempC) * 1.8 + 32;
    setTempF(resultadoConversao);
    setTempK(resultadoConversaoKelvin);
  }, [tempC]);

 /*  useEffect(() => {
    document.title = tempF;
  }, [tempF]); */
  return (
    <div>
      <input
        type="number"
        placeholder="Temperatura em Celsius"
        onChange={(evento) => setTempC(evento.target.value)}
      />
      <p>Valor digitado: {tempC} °C</p>
      <p>Temperatura em °F: {tempF} °F</p>
      <p>Temperatura em K: {tempK} K</p>
    </div>
  );
}
