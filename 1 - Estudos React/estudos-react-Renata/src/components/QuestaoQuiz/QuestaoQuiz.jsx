import { useState } from "react";
import "./QuestaoQuiz.css";

const pergunta = {
  enunciado: "Qual é a capital de Brunei?",
  alternativas: ["Fortaleza", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
  alternativaCorreta: "Bandar Seri Begawan",
};

export function QuestaoQuiz() {
  const [statusQuiz, setStatusQuiz] = useState("pendente");
  const [chances, setChances] = useState(2);
  // pendente = precisa marcar uma alternativa
  // acertou = marcou a alternativa correta
  // errou = marcou a alternativa errada

  function checarResposta(altMarcada) {
    if (altMarcada === pergunta.alternativaCorreta) {
      setStatusQuiz("acertou");
    } else {
      setChances(chances - 1)
      setStatusQuiz("errou");
    }/* else if (tentarNovamente *2){
      setStatusQuiz("tentativas esgotadas")
    } */
  }

  function tentarNovamente() {
    //voltar para pendente, indica para a interface atualizar e mostrar a pergunta novamente
    if(chances > 0){
      setStatusQuiz("pendente")
    }else{
      setStatusQuiz("tentativas esgotadas")
    }
  }




  if (statusQuiz === "pendente") {
    return (
      <div>
        <h3>{pergunta.enunciado}</h3>
        <small>Tentativas restantes: { chances }</small>
        <ol type="A">
          {pergunta.alternativas.map((elemento) => (
            <li
              className="alternativa"
              onClick={() => checarResposta(elemento)}
            >
              {elemento}
            </li>
          ))}
        </ol>
      </div>
    );
  } else if (statusQuiz === "acertou") {
    return (
      <div>
        <img src="https://cdn.streamelements.com/uploads/791f980d-6505-44a5-ad93-a86dbd054498.jpeg" />
        <h3>Acerto Mizeravi!</h3>
        <p>Você é muito inteligente!</p>
      </div>
    );
  } else if (statusQuiz === "errou") {
    return (
      <div>
        <img src="https://conteudo.imguol.com.br/c/bol/fotos/97/2018/01/10/faustao-mostrou-que-nem-sempre-quem-sabe-faz-ao-vivo-1515582826765_615x300.jpg" />
        <h3>EROOOOOOOU! Tente novamente.</h3>
        <button onClick={tentarNovamente}>Tentar novamente</button>
      </div>
    );
  } else if (statusQuiz === "tentativas esgotadas") {
    return(
    <div>
      <img src="http://pm1.narvii.com/6415/032506e9c4d0fd0b6e9a5126f01eea059f84ba55_00.jpg" />
      <h3>Tentivas esgotadas! Você é burro cara?</h3>
    </div>
  )};
}
