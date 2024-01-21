import React from 'react';
import ModifierEmployeForm from './ModifierEmployeForm'
const ModifierEmploye = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '12cm' }}>
        <div className="card card-primary w-100" style={{ marginLeft: '5cm' }}>
          <div className="card-header">
            <h3 className="card-title">Modify product</h3>
          </div>
          <ModifierEmployeForm/>
        </div>
      </div>
    </div>
  );
};

export default ModifierEmploye;
