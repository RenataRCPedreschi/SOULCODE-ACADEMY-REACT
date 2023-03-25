import "./Quadrado.css"


function quandoClicar(){
    alert("CLICOOOOOOOOOOUUUUUUUUUUUUUU")
}
function quandoMouseEntrar(evento){
/* Target é o elemento que acionou o evento (DOM) */
    const quadrado = evento.target;
    quadrado.style.backgroundColor = "red";
}

function quandoMouseSair(evento){
    /* Target é o elemento que acionou o evento (DOM) */
        const quadrado = evento.target;
        quadrado.style.backgroundColor = "#0b0b5e";
    }

    function duploClick(evento){
        const quadrado = evento.target;
        quadrado.style.backgroundColor = "orange";
    }

export function Quadrado(){
  return (
<div 
className="quadrado"
/* onClick={quandoClicar} */
onMouseEnter = {quandoMouseEntrar}
onMouseLeave = {quandoMouseSair}
onDoubleClick = {duploClick}
> 
</div>
    );
}