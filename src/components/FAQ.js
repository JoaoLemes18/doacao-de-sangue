import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2>Perguntas Frequentes</h2>
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

const faqData = [
  {
    question: "Qual é a idade mínima para doar sangue?",
    answer:
      "A idade mínima para doar sangue é geralmente 16 anos, com o consentimento dos pais ou responsáveis legais. \
      Para doadores entre 16 e 18 anos, é necessário o acompanhamento de um adulto.",
  },
  {
    question: "Com que frequência posso doar sangue?",
    answer:
      "Em geral, homens podem doar sangue a cada 2 meses (60 dias) e mulheres a cada 3 meses (90 dias). \
      No entanto, esses intervalos podem variar, e é importante verificar as orientações específicas do centro de doação.",
  },
  {
    question: "Quanto tempo dura o processo de doação de sangue?",
    answer:
      "O processo de doação de sangue geralmente leva cerca de 10 a 15 minutos. \
      No entanto, o tempo total pode variar dependendo do centro de doação e da agilidade do doador em preencher o formulário e passar pela triagem.",
  },
  {
    question: "Posso doar sangue se estiver resfriado ou gripado?",
    answer:
      "Se você estiver se sentindo doente, é recomendável adiar a doação de \
      sangue para garantir a segurança do doador e a qualidade do sangue doado. \
      Espere até se recuperar completamente antes de doar.",
  },
  {
    question: "Existe algum risco ao doar sangue?",
    answer:
      "A doação de sangue é geralmente segura, e os profissionais de saúde seguem \
      protocolos rigorosos para garantir a segurança do doador. No entanto, alguns \
      podem sentir tonturas temporárias ou fraqueza após a doação.",
  },
  {
    question: "Quais são os benefícios da doação de sangue?",
    answer:
      "A doação de sangue pode ajudar a salvar vidas e contribuir para tratamentos \
      médicos essenciais. Além disso, alguns estudos sugerem que a doação regular \
      pode ter benefícios para a saúde do doador, como a redução do risco de certas doenças.",
  },
  {
    question: "Posso doar sangue se estiver tomando medicamentos?",
    answer:
      "A elegibilidade para doação de sangue pode depender do tipo de medicamento \
      que você está tomando. Algumas medicações não são impeditivas, enquanto outras \
      podem requerer uma espera antes da doação. Consulte o centro de doação para obter informações específicas.",
  },
];

export default FAQ;
