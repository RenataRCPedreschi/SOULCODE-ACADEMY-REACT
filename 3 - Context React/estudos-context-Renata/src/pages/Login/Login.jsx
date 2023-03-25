import "./Login.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Login() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  return (
    <Container
      className={temaEscuro ? "bg-dark text-light layout"  : "bg-light text-dark layout"}>
      <Form className="col-auto">
        <Form.Group as={Row} className="mb-3 inputLayout" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 inputLayout" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Senha
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button className="btn btn-success ">Entrar</Button>
      </Form>
    </Container>
  );
}
