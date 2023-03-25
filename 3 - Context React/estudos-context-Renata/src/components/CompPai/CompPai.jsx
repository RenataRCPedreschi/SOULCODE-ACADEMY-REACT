import "./CompPai.css";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { useState } from "react";
import { BatataContext } from "../../contexts/BatataContexts";
import Alert from "react-bootstrap/Alert";
import Spinner from 'react-bootstrap/Spinner';
import { CompFilhoC } from "../CompFilhoC/CompFilhoC";

export function CompPai() {
  // Primeiramente definimos uma informação
  // que os componentes da hierarquia irão precisar
  const [batata, setBatata] = useState("batata");

  function repetir() {
    setBatata(batata + "a");
  }
  // Props drilling = quando temos uma hierarquia
  // de componentes muito extensa para passar props
  // em cada componente

  return (
    <div className="pai">
      <h3>Pai</h3>
      <button className="btn btn-dark" onClick={repetir}>
        Repetir
      </button>
      <p>
        <Alert key="danger" variant="danger">
          <b>Valor : </b>
          {batata}
        </Alert>
      </p>
      {/* Fornece o value para a hierarquia */}
      <BatataContext.Provider value={batata}>
      <img src="https://i.pinimg.com/originals/c5/a9/5c/c5a95c617902efd832903ac7572fa00b.gif"/>
        <CompFilhoA />
        <CompFilhoB />
        {/* <CompFilhoC /> */}
      </BatataContext.Provider>
    </div>
  );
}
