import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export function Herois() {
  const { register, handleSubmit } = useForm();

  function onsubmitHerois(data) {
    
    Swal.fire({
      title: "Meu Herói",
      html: `<h5> <b>Herói</b>: ${data.nome}</br> <b>Poder</b>: ${data.poder}</br>  <b>Fraqueza</b>: ${data.fraqueza} </br> <b>Sua História</b>: ${data.historia}</h5> `
    });
  }

  return (
    <div className="herois">
      <h1>Herois</h1>
      <form onSubmit={handleSubmit(onsubmitHerois)} noValidate>
        <label htmlFor="nome">Nome:</label>
        <br />
        <input type="text" id="nome" {...register("nome")} />
        <br />
        <label htmlFor="poder">Poder:</label>
        <br />
        <input type="text" id="poder" {...register("poder")} />
        <br />
        <label htmlFor="Fraqueza">Fraqueza:</label>
        <br />
        <input type="text" id="fraqueza" {...register("fraqueza")} />
        <br />

        <label htmlFor="historia">História:</label>
        <br />
        <textarea id="historia" cols="30" rows="10" {...register("historia")}></textarea>
        <br />
        <button type="submit">
          Veja seu Herói!
        </button>
      </form>
    </div>
  );
}
