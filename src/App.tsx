import React from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import WhatsAppIcon from "./components/WhatsAppIcon";

import Header from "./components/Header";
import How from "./components/How";
import Why from "./components/Why";
import Location from "./components/Location";
import Conditions from "./components/Conditions";
import Footer from "./components/Footer";
import Who from "./components/Who";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Why />
        <Location />
        <How />
        <Who />
        <Conditions />
        <FAQ />
        <Footer />
        <WhatsAppIcon />
      </main>
    </div>
  );
}

export default App;
