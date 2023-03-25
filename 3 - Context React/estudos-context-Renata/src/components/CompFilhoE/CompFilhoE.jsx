import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContexts";
import "./CompFilhoE.css";


//hook useContext = capturar o valor que é fornecido por algum provider
export function CompFilhoE() {

  const batata = useContext(BatataContext);
  //Capturando os dados do "value do provider"
  return <div className="filho-e">
    <h3>FILHO E</h3>
  	<p>
<b>Valor: </b>
{batata}
    </p>
  </div>;
}
