import React from 'react'
import DeleteProduitForm from './DeleteProduitForm';

export default function SupprimerProduit() {
  return (
    <div className="container-fluid">
      
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-danger w-100" style={{ marginLeft: '5cm' }}>
          <div className="card-header">
            <h3 className="card-title">Supprimer produit</h3>
          </div>
          <DeleteProduitForm />
        </div>
      </div>
    </div>
  );
};