import React, { useEffect, useState } from "react";
import Filters from "./components/Filter/filters";
import LeadList, { Lead } from "./components/LeadList/leadList";
import { fetchLeads } from "./services/api";
import "./index.css";
import "./components/LeadList/leadList.css";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const getLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
      setFilteredLeads(data); 
    };
    getLeads();
  }, []);

  const handleSearch = (filteredLeads: Lead[]) => {
    setFilteredLeads(filteredLeads);
  };

  return (
    <div className="app-container">
      <NavBar />
      <header className="my-4"></header>
      <main className="main-content">
        <section className="intro-section">
          <div className="left-content">
            <h2 className="motivational-text">
              Acredite no seu potencial e conquiste seus objetivos!
            </h2>
            <p className="business-opportunity-text">
              Estamos aqui para ajudar você a explorar novas oportunidades de
              negócios e crescer cada vez mais!
            </p>
            <button className="green-button">
              Fale com um especialista <span className="icon">→</span>
            </button>
          </div>
          <div className="right-content">
            <img
              src="./src/assets/img-section.png"
              alt="Imagem exemplo"
              className="right-image"
            />
          </div>
        </section>

        <section className="lead-list-section">
          <div className="lead-filters-list-container">
            <h2>Contatos de Clientes</h2>
            <Filters leads={leads} setFilteredLeads={handleSearch} />
            <LeadList leads={filteredLeads} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;



