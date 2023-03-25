//estado = características da página - tudo que pode mudar dependendo do contexto
import "./Contador.css"

import { useState } from "react"; //useState = função

export function Contador(){
    /* useState é uma função que cria um estado */
    /* Um estado é uma variável especial que sincroniza mudanãs da página */
    //índice 0 -> estado
    // índice 1 - Função que muda o estado

  /*  const array = useState(0);//retorna um array
    let numero = array [0];
    let setNumero = array[1]; */

    //destruct (desestruturação)
const [numero, setNumero] = useState(0);


    //Incrementar
    function inc(){
       setNumero(numero + 1);
    }

    //Decrementar
    function dec(){
        setNumero(numero - 1);
    }

    //inc + 10

    function incDez(){
        setNumero(numero + 10);
    }

    //inc + 100

    function incCem(){
        setNumero(numero + 100)
    }

    //inc *3
    function incMultTres(){
        setNumero(numero * 3)
    }

    // dividido por 2

    function dividePorDois(){
        setNumero(numero/2)
    }

    // dec -50

    function decCinquenta(){
        setNumero(numero - 50)
    }

    /* dec - 5 */

    function decCinco(){
        setNumero (numero - 5)
    }

    function zerar(){
        setNumero(0)
    }





    /* function setNumero(){
        const displayNumero = document.getElementById("displayNumero");
        displayNumero.innerHTML = numero;
    } */

    return (
<>
        <h1>{numero.toFixed(0)}</h1>
        <div className="contador">
            
     <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={incDez}>+10</button>
            <button onClick={incCem}>+100</button>
            <button onClick={incMultTres}>*3</button>
            <button onClick={dividePorDois}>/2</button>
            <button onClick={decCinquenta}>-50</button>
            <button onClick={decCinco}>-5</button>
            <button onClick={zerar}>Zerar</button>
            {/* <button onClick={setNumero}>Atualizar Valor</button> */}
        </div>
        </>
    );
    
}



/* import React, { useState } from "react";
import "./Contador.css";

export function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="contador">
      <h1 id="displayNumero">{numero}</h1>
      <div className="contador-container">
        <button
          onClick={() => {
            setNumero(numero + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setNumero(numero + 10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            setNumero(numero + 100);
          }}
        >
          +100
        </button>
        <button
          onClick={() => {
            setNumero(numero * 3);
          }}
        >
          x 3
        </button>
        <button
          onClick={() => {
            setNumero(numero / 2);
          }}
        >
          / 2
        </button>
        <button
          onClick={() => {
            setNumero(numero - 50);
          }}
        >
          -50
        </button>
        <button
          onClick={() => {
            setNumero(numero - 5);
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            setNumero(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
} */
