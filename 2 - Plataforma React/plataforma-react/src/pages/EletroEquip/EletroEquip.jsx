import { useForm } from "react-hook-form";
import { Alert } from "react-bootstrap";
import { useState } from "react";

export function EletroEquip() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [equipamento, setEquipamento] = useState();

  function OnsubmitEquipamentos(equipamento) {
    setEquipamento(equipamento);
  }

  return (
    <div className="eletroequip">
      <h1>Cadastro de equipamentos</h1>
      <form onSubmit={handleSubmit(OnsubmitEquipamentos)}>
        <label htmlFor="marcaModelo">Marca/Modelo</label>
        <br />
        <input
          type="text"
          id="marcaModelo"
          {...register("marcaModelo", { required: true, maxLength: 255 })}
        />
        <br />
        {errors.marcaModelo && (
          <span className="invalid">Digite uma marca/modelo válido(a)!</span>
        )}
        <br />

        <label htmlFor="numeroSerie">Número de Série</label>
        <br />
        <input
          type="number"
          id="numeroSerie"
          {...register("numeroSerie", { required: true, min: 0 })}
        />
        <br />
        {errors.numeroSerie && (
          <span className="invalid">Digite um número de série válido!</span>
        )}
        <br />

        <label htmlFor="descricao">Descrição do Problema:</label>
        <br />
        <textarea
          id="descricao"
          {...register("descricao", { required: true, maxLength: 500 })}
        ></textarea>
        <br />
        {errors.descricao && (
          <span className="invalid">Digite uma descrição válida!</span>
        )}
        <br />

        <label htmlFor="dataEntrada">Data de entrada: </label>
        <br />
        <input
          type="date"
          id="dataEntrada"
          {...register("dataEntrada", { required: true })}
        />
        <br />
        {errors.dataEntrada && (
          <span className="invalid">Preecha uma data de entrada válida!</span>
        )}
        <br />

        <label htmlFor="previsaoEntrega"> Previsão de Entrega: </label>
        <br />
        <input
          type="date"
          id="previsaoEntrega"
          {...register("previsaoEntrega", { required: true })}
        />
        <br />
        {errors.previsaoEntrega && (
          <span className="invalid">Preencha uma data válida!</span>
        )}
        <br />

        <label htmlFor="status">
          Status
          <br />
          <select id="status" {...register("status", { required: true })}>
            <option value="opção">
              Escolha uma opção
            </option>

            <option value="fazendo">Fazendo</option>
            <option value="concluído">Concluído</option>
            <option value=" entregue">Entregue</option>
          </select>
          <br />
          {errors.status && (
            <span className="invalid">Digite um status válido!</span>
          )}
          <br />
        </label>
        <br />

        <button type="submit">Cadastrar</button>

        {equipamento && (
          <Alert variant="danger">
            Marca/Modelo: {equipamento.marcaModelo} <br />
            Número de série: {equipamento.numeroSerie} <br />
            Descrição do problema: {equipamento.descricao} <br />
            Data de Entrada: {equipamento.dataEntrada} <br />
            Previsão de Entrega: {equipamento.previsaoEntrega} <br />
            Status: {equipamento.status} <br />
          </Alert>
        )}
      </form>
    </div>
  );
}
