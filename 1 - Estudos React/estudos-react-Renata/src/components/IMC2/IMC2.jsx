import { useEffect, useState } from "react";
import "./IMC2.css";

export function IMC2() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(-1);

  useEffect(() => {
    const resultadoIMC = peso / (altura * altura);
    setResultado(resultadoIMC);
  }, [peso, altura]);

  return (
    <div className="imc">
      <h2>Calculadora de IMC</h2>
      <h4>Digite seu peso em Kg:</h4>
      <input
        type="number"
        onChange={(evento) => setPeso(evento.target.value)}
      />
      <h4>Digite sua altura em metros:</h4>
      <input
        type="number"
        onChange={(evento) => setAltura(evento.target.value)}
      />

{(resultado !== Infinity && !isNaN(resultado)) && <p>O seu IMC é: {resultado.toFixed(2)}</p>}

    </div>
  );
}
