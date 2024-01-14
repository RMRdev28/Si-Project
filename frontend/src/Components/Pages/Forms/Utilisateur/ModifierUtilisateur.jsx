import React from 'react';
import ModifierUtilisateurForm from './ModifierUtilisateurForm';

const ModifierUtilisateur = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '5cm' }} >
          <div className="card-header">
            <h3 className="card-title">Modifier utilisateur</h3>
          </div>
          <ModifierUtilisateurForm/>
        </div>
      </div>
    </div>
  );
};

export default ModifierUtilisateur;
