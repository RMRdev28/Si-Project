import React from 'react';
import AjouterClientForm from './AjouterClientForm';

const AjouterClient = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '13cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '9cm' }} >
          <div className="card-header">
            <h3 className="card-title">Ajouter Client</h3>
          </div>
          <AjouterClientForm/>
        </div>
      </div>
    </div>
  );
};

export default AjouterClient;
