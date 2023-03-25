import "./CompFilhoD.css";
import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContexts";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CompFilhoD() {

  const batata = useContext(BatataContext);


  return <div className="filho-d">
    <h3>FILHO D</h3>
    <i className="text-danger">{batata}</i>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://gifs.eco.br/wp-content/uploads/2021/09/gifs-animados-de-batatas-3.gif" />
      <Card.Body>
        <Card.Title>BATATA</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus quo ipsa tempora mollitia porro, ut consectetur incidunt voluptate natus dolor at minima vel sapiente molestiae iure. Delectus, non aliquam?
        </Card.Text>
        <Button variant="primary">BATATA</Button>
      </Card.Body>
    </Card>
  </div>;
}
