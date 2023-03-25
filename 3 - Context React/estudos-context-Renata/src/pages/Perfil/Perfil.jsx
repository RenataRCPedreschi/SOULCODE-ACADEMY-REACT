import "./Perfil.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { Container } from "react-bootstrap";

export function Perfil() {
  const perfil = useContext(ThemeContext);
  const temaEscuro = perfil.temaEscuro;
  const alternar = perfil.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  return (
    <div className={temaEscuro ? "bg-dark text-light perfil" : "bg-light text-dark perfil"}>
      <Form>
        <Form.Group as={Row}>
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome completo" />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="tel" placeholder="Digite seu telefone" />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Cadastre uma senha:</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <div className="container btn">
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
        </div>
        <div className="container btn">
        <Button variant="dark" onClick={alternar}>
          <img src={iconeBtn} width="16" /> Alternar tema
        </Button>
        </div>
      </Form>
    </div>
  );
}
