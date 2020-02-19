import React from 'react';
import Input from '../../components/FormControl/Input';

export default function Principal() {
  return (
    <main>
      <h1>Consultar</h1>
      <form>
        <fieldset>
          <legend>IDENTIFICAÇÃO</legend>
          <Input placeholder="CPF/CNPJ" id="cpf" />
          <Input placeholder="Nome" id="nome" />
          UF
          <select name="uf" id="uf">
            <option defaultValue="selected">Selecione</option>
            <option value="PR">Paraná</option>
            <option value="SC">Santa Catarina</option>
            <option value="RS">Rio Grande do Sul</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>ATIVIDADE ECOMÔNICA (CNAE)</legend>
          Seção
          <select name="secao" id="secao">
            <option defaultValue="selected" value="">
              Selecione
            </option>
            <option value="15">
              Administração pública, defesa e seguridade social
            </option>
            <option value="1">
              Agricultura, pecuária, prod. florestal, pesca e aqüicultura
            </option>
            <option value="5">
              Água, esgoto, ativ. de gestão de resíduos e descontaminação
            </option>
            <option value="9">Alojamento e alimentação</option>
            <option value="18">Artes, cultura, esporte e recreação</option>
            <option value="14">
              Atividades administrativas e serviços complementares
            </option>
            <option value="11">
              Atividades financeiras, de seguros e serviços relacionados
            </option>
            <option value="12">Atividades imobiliárias</option>
            <option value="13">
              Atividades profissionais, científicas e técnicas
            </option>
            <option value="7">
              Comércio; reparação de veículos automotores e motocicletas
            </option>
            <option value="6">Construção</option>
            <option value="16">Educação</option>
            <option value="4">Eletricidade e gás</option>
            <option value="3">Indústrias de transformação</option>
            <option value="2">Indústrias extrativas</option>
            <option value="10">Informação e comunicação</option>
            <option value="21">
              Organismos internac. e outras instituições extraterritoriais
            </option>
            <option value="19">Outras atividades de serviços</option>
            <option value="17">Saúde humana e serviços sociais</option>
            <option value="20">Serviços domésticos</option>
            <option value="8">Transporte, armazenagem e correio</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>NATUREZA DA DÍVIDA</legend>
          <input
            type="checkbox"
            id="natureza-divida-1"
            name="natureza-divida-1"
            value="FGTS"
          />
          FGTS
          <input
            type="checkbox"
            id="natureza-divida-2"
            name="natureza-divida-2"
            value="Multa Criminal"
          />
          Multa Criminal
        </fieldset>
        <fieldset>
          <legend>FAIXA DE VALORES</legend>
          <Input
            placeholder="Valor Mínimo"
            type="text"
            id="valor-minimo"
            name="valor-minimo"
          />

          <Input
            placeholder="Valor Máximo"
            type="text"
            id="valor-maximo"
            name="valor-maximo"
          />
        </fieldset>
        <hr />
        <div>
          <button type="submit">Consultar</button>
          <input type="reset" value="Limpar" />
        </div>
      </form>
    </main>
  );
}
