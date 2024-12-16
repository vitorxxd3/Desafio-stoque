import React from "react";
import './leadList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    bs: string;
  };
}

interface LeadListProps {
  leads: Lead[];
}

const LeadList = ({ leads }: LeadListProps) => {
  return (
    <div className="list-container">
      {leads.length > 0 ? (
        <ul className="list-group">
          {leads.map((lead) => (
            <li key={lead.id} className="list-group-item">
              <div>
                <h5>{lead.name}</h5>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                  {lead.email}
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="fa-icon" />
                  {lead.phone}
                </p>
                <p>
                  <FontAwesomeIcon icon={faBuilding} className="fa-icon" />
                  Empresa: {lead.company.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">Nenhum lead encontrado!</p>
      )}
    </div>
  );
};

export default LeadList;
