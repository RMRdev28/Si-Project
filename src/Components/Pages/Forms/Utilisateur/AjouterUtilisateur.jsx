import React from 'react';
import AjouterUtilisateurForm from './AjouterUtilisateurForm';

const AjouterUtilisateur = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '5cm' }} >
          <div className="card-header">
            <h3 className="card-title">Ajouter un utilisateur</h3>
          </div>
          <AjouterUtilisateurForm/>
        </div>
      </div>
    </div>
  );
};

export default AjouterUtilisateur;
