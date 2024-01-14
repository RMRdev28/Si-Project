import React from 'react';
import AjouterEmployeForm from './AjouterEmployeForm';

const AjouterEmploye = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-success w-100" style={{ marginLeft: '5cm' }} >
          <div className="card-header">
            <h3 className="card-title">Add product</h3>
          </div>
          <AjouterEmployeForm />
        </div>
      </div>
    </div>
  );
};

export default AjouterEmploye;
