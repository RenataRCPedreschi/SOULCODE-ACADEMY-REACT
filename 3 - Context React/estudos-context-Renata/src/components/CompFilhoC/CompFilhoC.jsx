import { BatataContext } from "../../contexts/BatataContexts";
import { CompFilhoD } from "../CompFilhoD/CompFilhoD";
import { CompFilhoE } from "../CompFilhoE/CompFilhoE";
import "./CompFilhoC.css";

export function CompFilhoC() {
  return <div className="filho-c">
    <h3>FILHO C</h3>
    <CompFilhoD  />
    <CompFilhoE valor ={BatataContext}/>
  </div>
}
