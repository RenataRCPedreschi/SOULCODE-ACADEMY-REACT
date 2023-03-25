import { useState } from "react";
import "./IMC.css";

export function IMC() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calculaImc() {
    const imc = peso / (altura * altura);
    
    setResultado(imc);
  }

  function limpar() {
    setPeso(0);
    setAltura(0);
    setResultado(-1);
  }

  return (
    <div className="imc">
      <h2>Calculadora de IMC</h2>
      <h4>Digite seu peso em Kg:</h4>
      <input
        type="number"
        onChange={(e) => setPeso(e.target.value)}
        value={peso}
      />
      <h4>Digite sua altura em metros:</h4>
      <input
        type="number"
        onChange={(e) => setAltura(e.target.value)}
        value={altura}
      />
      <button onClick={calculaImc}>Calcular seu IMC</button>
      <button className="btnLimpar" onClick={limpar}>Limpar</button>

      {resultado > -1 && <p>Se IMC ficou em: {resultado.toFixed(2)}.</p>}
    </div>
  );
}
