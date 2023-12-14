import React from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import WhatsAppIcon from "./components/WhatsAppIcon";
import logoImage from "./imagens/logo.png"; // Substitua pelo caminho real da sua imagem

import hemocentroImage from "./imagens/hemocentro.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img
            src={logoImage}
            alt="Logo da Doação de Sangue Cuiabá"
            className="logo"
          />
          <div className="header-text">
            <h1>Doação de Sangue</h1>
            <div className="sub">
              <p>Informações e esclarecimentos sobre doação de sangue.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h2>Por que doar sangue?</h2>
          <p>
            A doação de sangue é um ato nobre que pode salvar vidas. O sangue é
            essencial em diversos tratamentos médicos e intervenções, como
            cirurgias, tratamento de doenças crônicas, e atendimento a vítimas
            de acidentes e traumas.
          </p>
          <p>
            Muitas pessoas dependem da generosidade de doadores voluntários para
            garantir que tenham acesso a sangue seguro e de qualidade quando
            precisam. Seu gesto solidário pode fazer a diferença na vida de
            alguém.
          </p>
          <p>
            Além disso, a doação de sangue não apenas beneficia os receptores,
            mas também pode ter benefícios para os doadores. Estudos indicam que
            a doação regular pode ajudar a reduzir o risco de certas doenças
            cardiovasculares.
          </p>
          <p>
            Junte-se a nós na missão de ajudar a construir uma comunidade mais
            saudável e solidária através da doação de sangue.
          </p>
        </section>
        <section>
          <h2>Locais de Doação em Cuiabá</h2>
          <ul className="donation-locations-list">
            <li>
              <div className="donation-location-info">
                <img src={hemocentroImage} alt="Hemocentro de Cuiabá" />

                <div>
                  <h3>Hemocentro de Cuiabá</h3>
                  <p>
                    <a
                      href="https://mthemocentro.saude.mt.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agende aqui a sua doação!{" "}
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2>Como Doar?</h2>
          <p>
            Doar sangue é um processo simples e seguro. Aqui estão os passos
            básicos para realizar sua doação:
          </p>
          <ol>
            <li>
              Verifique se você atende aos requisitos básicos para doação, como
              idade e saúde.
            </li>
            <li>Agenda sua doação</li>

            <li>
              Complete um breve formulário de triagem para avaliar sua
              elegibilidade.
            </li>
            <li>
              Passe por uma entrevista com um profissional de saúde para
              garantir a segurança do processo.
            </li>
            <li>
              Realize a doação de sangue, que geralmente leva cerca de 10 a 15
              minutos.
            </li>
            <li>Recupere-se com um lanche fornecido pelo centro de doação.</li>
          </ol>
          <p>
            Lembre-se de trazer um documento de identificação com foto válido.
            Se você já doou antes, traga sua carteira de doador.
          </p>
          <p>
            Após a doação, é recomendável evitar esforço físico excessivo e
            manter-se bem hidratado.
          </p>
        </section>
        <FAQ />
      </main>
      <footer style={{ textAlign: "center" }}>
        <p>&copy; 2023 Doação de Sangue Cuiabá</p>
      </footer>
      <WhatsAppIcon />
    </div>
  );
}

export default App;
