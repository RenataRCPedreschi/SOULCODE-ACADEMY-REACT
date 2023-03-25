import { useEffect, useState } from "react";
import "./CalcPorc.css";

export function CalcPorc(){
const [valor, setValor] = useState("");
const [percentual, setPercentual] = useState("");
const [resultado, setResultado] = useState("");

useEffect(() =>{

    const calculo = valor * (percentual/100);
    setResultado(calculo);

}, [valor, percentual])


return(
<div>
    <h4>Valor:</h4>
    <input type="number" placeholder="Valor" onChange={(evento) => setValor(evento.target.value)} />
    <h4>Valor em Percentual:</h4>
    <input type="number" placeholder="Percentual" onChange={(evento) => setPercentual(evento.target.value)} />
    <h4>{percentual}% de {valor} é {resultado}.</h4>
</div>
)
}