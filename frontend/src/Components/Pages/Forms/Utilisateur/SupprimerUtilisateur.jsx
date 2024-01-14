import React from 'react'
import SupprimerUtilisateurForm from './SupprimerUtilisateurForm'
export default function SupprimerUtilisateur() {
  return (
    <div className="container-fluid">
      
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-danger w-100" style={{ marginLeft: '5cm' }}>
          <div className="card-header">
            <h3 className="card-title">Supprimer utilisateur</h3>
          </div>
          <SupprimerUtilisateurForm/>
        </div>
      </div>
    </div>
  );
};