import React from 'react';
import ProduitForm from './ProduitForm';

const AjouterProduit = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '5cm' }} >
       
          <ProduitForm />
        </div>
      </div>
    </div>
  );
};

export default AjouterProduit;
