import "./ChecarNumero.css"

export function ChecarNumero(props){
    
    return (
        <>
        {props.numero %2 == 0 && <h1 className="par">O número {props.numero} é par.</h1> }
        {props.numero %2 != 0 && <h1 className="impar">O número {props.numero} é ímpar.</h1> }
        </>
    )
  }