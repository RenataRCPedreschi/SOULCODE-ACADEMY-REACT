import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";
import Spinner from 'react-bootstrap/Spinner';

export function CompFilhoA() {

  return <div className="filho-a">
<h3>FILHO A</h3>
<Spinner animation="grow" />
<CompFilhoC />
  </div>;
}
