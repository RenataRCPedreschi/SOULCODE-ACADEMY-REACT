import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function Usuarios() {
  return (
    <div className="usuarios">
      <h1>Usuários</h1>
      <Table striped bordered hover>
        <thead>
          <tr key={usuarios.id}>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.email}</td>
                <td>
                  <Link to={`/usuario/edit/${usuario.id}`}>Editar</Link>
                </td>
                <td>
                  <Link to={`/usuario/perfil/${usuario.id}`}>Ver Usuário</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
