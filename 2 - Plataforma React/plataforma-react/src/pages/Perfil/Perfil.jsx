import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Perfil(){

    let params = useParams();
    let id = params.id;

    let usuario  = usuarios.find(u => u.id === parseInt(id));


    let navigate = useNavigate();
  
function voltar(){
  /* Capturar as informações do formulário, validar os dados e modificar as informações do banco de dados */
  navigate("/usuarios")
}
  

    return(
        <div className="perfil">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button onClick={voltar} variant="dark">Voltar</Button>
            </div>
    )
}