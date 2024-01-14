import React from 'react';
import AjouterVenteForm from '../Vente/AjouterVenteForm';

const AjouterVente = () => {
  return (
    <div className="container-fluid" >
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '9cm', marginTop:'2cm' }}>
        <div className="card card-success" style={{ width: '30rem'  }}>
          <div className="card-header">
            <h3 className="card-title">Ajouter Vente</h3>
          </div>
          <div className="card-body">
            <AjouterVenteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjouterVente;
