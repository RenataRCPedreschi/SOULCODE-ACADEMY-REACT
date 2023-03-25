import "./Cadastro.css"
import { useState } from "react";

export function Cadastro() {
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [descricao, setDescricao] = useState("");

    function obterNome(evento){
        const input = evento.target;
        const valor = input.value;
        setNome(valor);
    }

    function obterEmail(evento){
        const input = evento.target; //aciona o input
        const valor = input.value;
        setEmail(valor);
}


function obterDescricao(evento){
    const textarea = evento.target; //aciona o input
    const valor = textarea.value;
    setDescricao(valor);
}

    return (
        <div className="cadastro">
            <strong>Formulário de cadastro</strong>
            {/* <br /><br /> */}
            <input type="text" placeholder="Digite seu nome" onChange={obterNome}/>
            {/* <br /><br /> */}
            <input type="text"placeholder="Digite seu e-mail" onChange={obterEmail} />
            <textarea type="text"placeholder="Descrição do Usuário" onChange={obterDescricao}></textarea>
            {/* <br /> */}
            <strong>{nome}</strong>
            {/* <br /> */}
            <strong>{email}</strong>
            <strong>{descricao}</strong>
        </div>
    );
}


/* function ObterNome(evento){
    setNome(evento.target.value);
} */

/* function ObterEmail(evento){
    setEmail(evento.target.value);
} */