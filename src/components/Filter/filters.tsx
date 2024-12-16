import React, { useState } from "react";
import { Lead } from "../LeadList/leadList";
import "./filters.css";

interface FiltersProps {
  leads: Lead[];
  setFilteredLeads: (filteredLeads: Lead[]) => void;
}

const Filters = ({ leads, setFilteredLeads }: FiltersProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    const filtered = leads.filter(
      (lead) =>
        (lead.name.toLowerCase().includes(query.toLowerCase()) ||
          lead.email.toLowerCase().includes(query.toLowerCase()) ||
          lead.phone.toLowerCase().includes(query.toLowerCase()) ||
          lead.company.name.toLowerCase().includes(query.toLowerCase())) &&
        (category === "" || lead.company.bs.toLowerCase().includes(category.toLowerCase()))
    );
    setFilteredLeads(filtered);
  };

  return (
    <div className="filters-container">
      <div className="filters-box">
        <div className="input-group">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Categoria..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button className="filter-button" onClick={handleFilter}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default Filters;


