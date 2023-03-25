import { useEffect, useState } from "react";
import { Container, FormCheck, FormSelect, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Devs.css";

export function Devs() {
  /* Validação Email */
  const patternEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [devs, setDevs] = useState("");
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitDevs(devs) {
    setDevs(devs);
    setModal(true);
  }

  useEffect(() => {
    console.log(devs);
  }, [devs]);

  return (
    <Container className="devs">
      <h2 className="title">Cadastro de programadores</h2>
      <form onSubmit={handleSubmit(onSubmitDevs)}>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            {...register("nome", { required: true, maxLength: 255 })}
          />
          {errors.nome && (
            <span className="invalid">Digite um nome válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true, pattern: patternEmail })}
          />
          {errors.email && (
            <span className="invalid">Digite um email válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="tel"
            {...register("telefone", { required: true, min: 0 })}
          />
          {errors.telefone && (
            <span className="invalid">Digite um telefone válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            {...register("cidade", { required: true, maxLength: 255, min: 5 })}
          />
          {errors.cidade && (
            <span className="invalid">Digite uma cidade válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            {...register("estado", { required: true, maxLength: 255, min: 2 })}
          />
          {errors.estado && (
            <span className="invalid">Digite um estado válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="interesses">
          <Form.Label>Áreas de Interesses</Form.Label>
          <FormCheck
            type="checkbox"
            label="Back-end"
            {...register("back")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Front-end"
            {...register("front")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Mobile"
            {...register("mobile")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Devops"
            {...register("devops")}
          ></FormCheck>
        </Form.Group>

        <Form.Group className="mb-3" controlId="nivel">
          <Form.Label>Nível de experiência</Form.Label>
          <FormSelect {...register("nivel", { required: true })}>
            <option>Escolha uma opção</option>
            <option>Iniciante</option>
            <option>Júnior</option>
            <option>Pleno</option>
            <option>Sênior</option>
          </FormSelect>
        </Form.Group>

        <Form.Group className="mb-3" controlId="portfolio">
          <Form.Label>Portfólio</Form.Label>
          <Form.Control
            type="url"
            placeholder="Link do portfólio"
            {...register("portfolio", { required: true })}
          />
          {errors.portfolio && (
            <span className="invalid">Digite um portfólio válido!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="habilidades">
          <Form.Label>Habilidades</Form.Label>
          <FormCheck
            type="checkbox"
            label="Java"
            {...register("habilidades.java")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Node.js"
            {...register("habilidades.node")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="React.js ou React Native"
            {...register("habilidades.react")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Angular"
            {...register("habilidades.angular")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Cloud"
            {...register("habilidades.cloud")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="HTML"
            {...register("habilidades.html")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="CSS"
            {...register("habilidades.css")}
          ></FormCheck>
          <FormCheck
            type="checkbox"
            label="Javascript"
            {...register("habilidades.js")}
          ></FormCheck>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formacao">
          <Form.Label>Formação Acadêmica</Form.Label>
          <Form.Control
            type="text"
            placeholder="Curso"
            {...register("formacao", { required: true })}
          />
          {errors.formacao && (
            <span className="invalid">
              Digite uma formação academica válida!
            </span>
          )}
          <FormSelect {...register("situacao", { required: true })}>
            <option>Escolha uma opção</option>
            <option>Cursando</option>
            <option>Concluído</option>
            <option>Pausado/Trancado</option>
          </FormSelect>
        </Form.Group>

        <Form.Group className="mb-3" controlId="curriculo">
          <Form.Label>Currículo</Form.Label>
          <Form.Control
            type="file"
            placeholder="Arquivo PPT, DOC ou PDF"
            {...register("curriculo", { required: true })}
          />
          {errors.curriculo && (
            <span className="invalid">Anexe seu currículo!</span>
          )}
        </Form.Group>

        <Button className="btn" variant="success" type="submit">
          Cadastrar
        </Button>

        <Modal show={modal} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Reveja seus dados</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {devs && (
              <>
                <p>Nome: {devs.nome}</p>
                <p>Email: {devs.email}</p>
                <p>Telefone: {devs.telefone}</p>
                <p>Cidade: {devs.cidade}</p>
                <p>Estado: {devs.estado}</p>
                <p>
                  Áreas de interesse: Back - End {devs.back ? "sim" : "Não"}
                </p>
                <p>
                  Áreas de interesse: Front - End {devs.front ? "sim" : "Não"}
                </p>
                <p>Áreas de interesse: Mobile {devs.mobile ? "sim" : "Não"}</p>
                <p>Áreas de interesse: DevOps {devs.devops ? "sim" : "Não"}</p>
                <p>Nível experiência: {devs.nivel}</p>
                <p>Portfólio: {devs.portfolio}</p>
                <p>Habilidades: Java {devs.habilidades.java ? "sim" : "Não"}</p>
                <p>Habilidades: Node {devs.habilidades.node ? "sim" : "Não"}</p>
                <p>Habilidades: React {devs.habilidades.react ? "sim" : "Não"}</p>
                <p>Habilidades: Angular {devs.habilidades.angular ? "sim" : "Não"}</p>
                <p>Habilidades: Cloud {devs.habilidades.cloud ? "sim" : "Não"}</p>
                <p>Habilidades: HTML {devs.habilidades.html ? "sim" : "Não"}</p>
                <p>Habilidades: CSS {devs.habilidades.css ? "sim" : "Não"}</p>
                <p>Habilidades: Js {devs.habilidades.js ? "sim" : "Não"}</p>
                <p>Formação acadêmica: {devs.formacao}</p>
                <p>Situação acadêmica: {devs.situacao}</p>
                <p>Situação acadêmica: {devs.curriculo[0].name}</p>
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={() => setModal(false)}>
              Voltar
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </Container>
  );
}

{
  /* <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Reveja seus dados</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>
      Nome: {devs.nome}
      Email: {devs.email}
      Telefone: {devs.telefone}
      Cidade: {devs.cidade}
      Estado: {devs.estado}
      Áreas de interesse: {devs.back}
      Áreas de interesse: {devs.front}
      Áreas de interesse: {devs.mobile}
      Áreas de interesse: {devs.devops}
      Nível experiência: {devs.nivel}
      Portfólio: {devs.portfolio}
      Habilidades: {devs.java}
      Habilidades: {devs.node}
      Habilidades: {devs.react}
      Habilidades: {devs.angular}
      Habilidades: {devs.cloud}
      Habilidades: {devs.html}
      Habilidades: {devs.css}
      Habilidades: {devs.js}
      Formação acadêmica: {devs.formacao}
      Situação acadêmica: {devs.situacao}
      Currículo: {devs.curriculo}
 
      </Modal.Body>
  
      <Modal.Footer>
        <Button variant="primary">Voltar</Button>
      </Modal.Footer>
    </Modal.Dialog> */
}
