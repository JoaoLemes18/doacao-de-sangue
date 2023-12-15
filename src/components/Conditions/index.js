import React from "react";
import "../../App.css";

function Conditions() {
  return (
    <section>
      <h2>Algumas Condições que Impedem a Doação de Sangue</h2>
      <ol>
        <li>Anemia</li>
        <li>
          Pressão arterial alta (Máxima acima de 180 ou Mínima acima de 100
          mmHg)
        </li>

        <li>Parto ou abortamento (3 meses)</li>
        <li>
          Brinco: com antissepsia adequada, perfurador automático e/ou material
          descartável, aguardar 15 dias
        </li>
        <li>
          Acupuntura: liberar 15 dias, desde que o material utilizado seja
          descartável. Caso contrário, aguardar 12 meses.
        </li>
        <li>
          Piercing e maquiagem definitiva: 12 meses após a realização; a doação
          pode ser liberada 6 meses após a colocação do piercing se o
          procedimento foi realizado em condições adequadas de antissepsia.
        </li>
        <li>
          Tatuagem: 12 meses após a data da realização da tatuagem; a doação
          pode ser liberada 6 meses após a realização da tatuagem caso o
          candidato a doação de sangue traga uma declaração do tatuador
          constando a data de realização, número de alvará de funcionamento do
          estabelecimento e que a tatuagem foi realizada em condições
          assépticas.
        </li>
      </ol>
    </section>
  );
}

export default Conditions;
