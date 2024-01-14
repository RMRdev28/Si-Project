import React from 'react';
import AjouterAchatForm from './AjouterAchatForm';

const AjoutAchat = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '5cm' }} >
          <div className="card-header">
            <h3 className="card-title">Ajouter Achat</h3>
          </div>
          <AjouterAchatForm/>
        </div>
      </div>
    </div>
  );
};

export default AjoutAchat;
