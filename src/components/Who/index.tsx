import React from "react";
import "../../App.css";

function Who() {
  return (
    <section id="who">
      <h2>Requisitos para Doar</h2>
      <ol>
        <li>Ter peso igual ou superior a 51 kg;</li>

        <li>
          Em caso de ter tido sintomas gripais, aguardar 14 dias para realizar a
          doação;
        </li>
        <li>
          Estar bem alimentado (evitar alimentos gordurosos 3 horas antes da
          doação);
        </li>
        <li>Ter dormido pelo menos 6 horas na noite anterior;</li>
        <li>Não ter ingerido bebida alcoólica 12 horas antes da doação;</li>
        <li>
          Caso tenha sido vacinado, aguardar 30 dias para realizar a doação.
        </li>
        <li>
          Não ter sido exposto a situação de risco para infecção sexualmente
          transmissível (IST);
        </li>
      </ol>
    </section>
  );
}

export default Who;
