import React from 'react'
import SupprimerClientForm from './SupprimerClientForm'
export default function SupprimerClient() {
  return (
    <div className="container-fluid">
      
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-danger w-100" style={{ marginLeft: '5cm' }}>
          <div className="card-header">
            <h3 className="card-title">Supprimer Client</h3>
          </div>
          <SupprimerClientForm/>
        </div>
      </div>
    </div>
  );
};