import "./ListaAlunos.css";

const alunos = [
  {
    nome: "Renata",
    dataNascimento: "10/10/1992",
    nota: "5",
    telefone: "(11)99999-9999",
  },
  {
    nome: "José Almir",
    dataNascimento: "02/03/2001",
    nota: "7",
    telefone: "(45)55555-5555",
  },
  {
    nome: "Gabriel Braga",
    dataNascimento: "15/07/2003",
    nota: "10",
    telefone: "(11)66666-6666",
  },
  {
    nome: "Juliana Nascimento",
    dataNascimento: "25/09/1997",
    nota: "7",
    telefone: "(11)33333-3333",
  },
];

export function ListaAlunos() {
  /*  if("aprovado"){
        cardAlunos = "aprovado";
    }else{
        cardAlunos = "reprovado"
    } */

  /* (dentro da div - como style)
  style={ aluno.nota < 7 ? { borderColor: "red" } : { borderColor: "green" } } */


  return (
    <>
      {alunos.map((aluno, index) => (
        <div className={`cardAlunos ${aluno.nota >= 7 ? "aprovado" : "reprovado"}`} key={index}>
          <p>Nome:{aluno.nome}</p>
          <p>Nascimento: {aluno.dataNascimento}</p>

          {aluno.nota >= 7 && <p>Media: {aluno.nota}</p>}
          {aluno.nota < 7 && <p>Estude mais, você consegue!</p>}

          <p>Telefone: {aluno.telefone}</p>
        </div>
      ))}
    </>
  );
}
