import { useState } from "react";
import "./CadastroPessoas.css";

export function CadastroPessoas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [listaPessoas, setListaPessoas] = useState([]);

  function adicionarPessoas(){
    const novaPessoa ={
        nome: nome,
        email: email,
        cpf: cpf,
        salario:salario,
    };

    /* listaPessoas.push(novaPessoa); */

    const novoArray =[...listaPessoas, novaPessoa];
    //isso não funciona
    // o array tem ser novo/diferente
    setListaPessoas(novoArray);
  }

function removerPessoa(objeto){
  const novoArray = listaPessoas.filter((elemento) => elemento !== objeto);
  setListaPessoas(novoArray);
}
  
  return (
    <div className="cadastroPessoas">
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
      />
      <input
        type="number"
        placeholder="Salário"
        onChange={(e) => setSalario(e.target.value)}
      />
      <button onClick={adicionarPessoas}>Adicionar</button>
      <table className="tabelaPessoas">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
          {listaPessoas.map((elemento, index) => {
            return( 
                <tr key={index}>
                <td>{elemento.nome}</td>
                <td>{elemento.email}</td>
                <td>{elemento.cpf}</td>
                <td>{elemento.salario}</td>
                <td>
                    <button onClick={() => removerPessoa(elemento)}>Remover</button>
                </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
