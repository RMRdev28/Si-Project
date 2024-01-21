import React from 'react';
import ModifierClientForm from './ModifierClientForm'
const ModifierClient = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '13cm' }}>
        <div className="card card-primary w-100" style={{ marginLeft: '9cm' }}>
          <div className="card-header">
            <h3 className="card-title">Modifier Client</h3>
          </div>
          <ModifierClientForm/>
        </div>
      </div>
    </div>
  );
};

export default ModifierClient;
