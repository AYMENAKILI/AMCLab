import React from "react";
import logoCnss from './assets/logo CNSS.png';
import logoUser from "./assets/iconUser.png";
import './Card2.css';

const Card2 = ({ casData, numAffil, dateDebut, dateFin, onBackButtonClick }) => {
  return (
    <div className="card2-container">
      <div className='div1-card1'>
        <img className='img1' src={logoCnss} alt="" />
        <h1 className='appName'>AMCLab</h1>
        <img className='img2' src={logoUser} alt="" />
      </div>
      <div className="left-section">
        <div className="card0">
          <div className="card">
            <h1>Affilié numéro : {numAffil}</h1>
            <p>Début de Contrat: {dateDebut}</p>
            <p>Fin de Contrat : {dateFin}</p>
          </div>
          <button onClick={onBackButtonClick}>ACCEUIL</button>
        </div>
      </div>
      <div className="right-section">
        <table className="cas-table">
          <thead>
            <tr>
              <th>Numero Assure</th>
              <th>Date Debut</th>
              <th>Date Fin</th>
            </tr>
          </thead>
          <tbody>
            {casData.map((cas, index) => (
              <tr key={index}>
                <td data-label="Numero Assure">{cas.CAS_N_NUMERO}</td>
                <td data-label="Date Debut">{cas.CAS_D_DEBUT}</td>
                <td data-label="Date Fin">{cas.CAS_D_FIN}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card2;
