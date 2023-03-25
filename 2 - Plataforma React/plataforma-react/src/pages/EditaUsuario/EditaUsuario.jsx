import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario() {

    //useParams é uma função que retorna um objeto. Esse objeto contém os parâmetros passados pela rota
  let params = useParams();
  let id = params.id;
 
  const usuario = usuarios.find(usuario =>{
    return usuario.id === parseInt(id);//retorna valor booleano que satisfaz a pesquisa
  });

  let navigate = useNavigate();
  
function editar(){
  
  /* Capturar as informações do formulário, validar os dados e modificar as informações do banco de dados */
  navigate("/usuarios")
}
  


  return (
    <div className="edita-usuario">
      <h2>{usuario.nome}</h2>
      <span>{usuario.email}</span>
      <br />
      <span>{usuario.idade} anos</span>
      <br />
      <Button onClick={editar} variant="dark">Editar</Button>
    </div>
  );
}
