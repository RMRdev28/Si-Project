import React from 'react';
import ModifierAchatForm from './ModifierAchatForm'
const ModifierAchat = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-primary w-100" style={{ marginLeft: '5cm' }}>
          <div className="card-header">
            <h3 className="card-title">Modifier Achat</h3>
          </div>
          <ModifierAchatForm/>
        </div>
      </div>
    </div>
  );
};

export default ModifierAchat;
