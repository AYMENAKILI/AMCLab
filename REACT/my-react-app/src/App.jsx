import React, { useState } from 'react';
import Card1 from "./Card1.jsx";
import Card2 from "./Card2.jsx";

const App = () => {
  const [showSecondInterface, setShowSecondInterface] = useState(false);
  const [casData, setCasData] = useState([]);
  const [numAffil, setNumAffil] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

  const handleButtonClick = async (AFF_AFF_V_NUM_AFF, CAF_D_DCONV, CAF_D_FCONV) => {
    try {
      const response = await fetch('http://localhost:5174/getCasInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ AFF_AFF_V_NUM_AFF, CAF_D_DCONV, CAF_D_FCONV }),
      });

      const data = await response.json();
      setCasData(data);
      setNumAffil(AFF_AFF_V_NUM_AFF);
      setDateDebut(CAF_D_DCONV);
      setDateFin(CAF_D_FCONV);
      setShowSecondInterface(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBackButtonClick = () => {
    setShowSecondInterface(false);
  };

  return (
    <div>
      {showSecondInterface ? (
        <Card2 
          casData={casData} 
          numAffil={numAffil} 
          dateDebut={dateDebut} 
          dateFin={dateFin}
          onBackButtonClick={handleBackButtonClick}
        />
      ) : (
        <Card1 onButtonClick={handleButtonClick} />
      )}
    </div>
  );
};

export default App;
