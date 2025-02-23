import React, { useState } from 'react';
import logoCnss from './assets/logo CNSS.png';
import logoUser from "./assets/iconUser.png";

const Card1 = ({ onButtonClick }) => {
  const [numAffil, setNumAffil] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

  const handleFetchData = () => {
    onButtonClick(numAffil, dateDebut, dateFin);
  };

  return (
    <div className='div0'>
      <div className='div1-card1'>
        <img className='img1' src={logoCnss} alt="" />
        <h1 className='appName'>AMCLab</h1>
        <img className='img2' src={logoUser} alt="" />
      </div>

      <div className='div2-card1'>
        <div className='div2-1'>
          <div className='div2-1-1'>
            <label htmlFor="numAffil"><h3>Numéro Affilié</h3></label><br />
            <input type="text" name="numAffil" id="numAffil" value={numAffil} onChange={(e) => setNumAffil(e.target.value)} />
          </div>
        </div>
        
        <div className='div2-1'>
          <div className='div2-1-1'>
            <label htmlFor="dateDebut"><h3>Date Début</h3></label><br />
            <input type="text" name="dateDebut" id="dateDebut" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
          </div>
        </div>
        
        <div className='div2-1'>
          <div className='div2-1-1'>
            <label htmlFor="dateFin"><h3>Date Fin</h3></label><br />
            <input type="text" name="dateFin" id="dateFin" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
          </div>
        </div>
      </div>

      <div className='div3-card1'>
        <button onClick={handleFetchData}>VALIDER</button>
      </div>
    </div>
  );
};

export default Card1;
