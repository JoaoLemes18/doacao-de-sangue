import React, { useState } from "react";
import "./faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "1 - Qual é a idade mínima para doar sangue?",
    answer:
      "A idade mínima para doar sangue é geralmente 16 anos, com o consentimento dos pais ou responsáveis legais. \
      Para doadores entre 16 e 18 anos, é necessário o acompanhamento de um adulto.",
  },
  {
    question: "2 - Com que frequência posso doar sangue?",
    answer:
      "Em geral, homens podem doar sangue a cada 2 meses (60 dias) e mulheres a cada 3 meses (90 dias). \
      No entanto, esses intervalos podem variar, e é importante verificar as orientações específicas do centro de doação.",
  },
  {
    question: "3 - Por que pessoas com menos de 50 kg não podem doar?",
    answer:
      "O volume a ser doado é proporcional ao peso do doador. Para homens é de 9 mL/kg e para mulheres, 8 mL/kg. O anticoagulante presente na bolsa de doação mistura-se ao sangue impedindo que esse coagule. O volume de anticoagulante da bolsa (63 mL) é padronizado para um mínimo de 400 mL de sangue, logo uma pessoa com peso menor que 50 quilos não poderia doar o volume mínimo, pois sobraria anticoagulante livre o que é indesejável (pode lesar os glóbulos vermelhos). Não se recomenda violar a bolsa para retirar anticoagulante sob o risco de contaminação bacteriana. Este procedimento só deverá ser feito em circunstâncias especiais em que os benefícios superem os riscos, como, por exemplo, na doação autóloga (quando o doador doa seu sangue para uso nele mesmo geralmente durante uma cirurgia programada).",
  },
  {
    question: "4 - Quanto tempo dura o processo de doação de sangue?",
    answer:
      "O processo de doação de sangue geralmente leva cerca de 10 a 15 minutos. \
      No entanto, o tempo total pode variar dependendo do centro de doação e da agilidade do doador em preencher o formulário e passar pela triagem.",
  },
  {
    question: "5 - Posso doar sangue se estiver resfriado ou gripado?",
    answer:
      "Se você estiver se sentindo doente, é recomendável adiar a doação de \
      sangue para garantir a segurança do doador e a qualidade do sangue doado. \
      Espere até se recuperar completamente antes de doar.",
  },
  {
    question: "6 - Existe algum risco ao doar sangue?",
    answer:
      "A doação de sangue é geralmente segura, e os profissionais de saúde seguem \
      protocolos rigorosos para garantir a segurança do doador. No entanto, alguns \
      podem sentir tonturas temporárias ou fraqueza após a doação.",
  },
  {
    question: "7 - Quais são os benefícios da doação de sangue?",
    answer:
      "A doação de sangue pode ajudar a salvar vidas e contribuir para tratamentos \
      médicos essenciais. Além disso, alguns estudos sugerem que a doação regular \
      pode ter benefícios para a saúde do doador, como a redução do risco de certas doenças.",
  },

  {
    question: "8 - Posso doar sangue se estiver tomando medicamentos?",
    answer:
      "A elegibilidade para doação de sangue pode depender do tipo de medicamento \
      que você está tomando. Algumas medicações não são impeditivas, enquanto outras \
      podem requerer uma espera antes da doação. Consulte o centro de doação para obter informações específicas.",
  },
  {
    question: "9 -  O material usado é mesmo seguro?",
    answer:
      "Sim, todo o material usado para a coleta de sangue é individual, descartável, apirogênico (não causa febre) e estéril.",
  },
  {
    question: "10 -  Qualquer grau de “anemia” impede a doação? Por que?",
    answer:
      "Não pode doar a pessoa que apresentar hematócrito menor que 39% (ou hemoglobina <13g/dL) no homem e 38% (ou hemoglobina < 12,5 g/dL) na mulher. Este limite é necessário para não causar prejuízos à saúde do doador e permitir a coleta da quantidade de sangue estipulada como uma unidade (dose) para um adulto.",
  },
];

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Dúvidas e Perguntas</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openQuestion === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            <h3>{item.question}</h3>
            <span
              className={`arrow ${openQuestion === index ? "open" : "closed"}`}
            ></span>
          </div>
          {openQuestion === index && <p>{item.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
