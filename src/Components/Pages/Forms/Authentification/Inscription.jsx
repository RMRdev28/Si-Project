import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'inclure la feuille de style Bootstrap
import './auth.css';

const Inscription = () => {
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    nom: '',
    prenom: '',
    numTelephone: '',
    solde: '',
    centre: '',
    salaire: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données du formulaire où vous en avez besoin
    console.log('Données soumises:', formData);
  };

  return (
    <div className="container align-items-center  w-80 vh-100 d-flex justify-content-center">
      <div className="card card-success ">
        <h2 className="text-center">Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userType" className="form-label">
              Type d'utilisateur:
            </label>
            <select
              id="userType"
              className="form-select"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="client">Client</option>
              <option value="employe">Employé</option>
            </select>
          </div>

          <label>
          Login:
          <input type="text" name="login" value={formData.login} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Mot de passe:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Nom:
          <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Prénom:
          <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Numéro de téléphone:
          <input type="text" name="numTelephone" value={formData.numTelephone} onChange={handleInputChange} />
        </label>
        <br />


          {/* Champs spécifiques aux clients */}
          {userType === 'client' && (
            <div className="mb-3">
              <label htmlFor="solde" className="form-label">
                Solde:
              </label>
              <input
                type="text"
                id="solde"
                name="solde"
                value={formData.solde}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          )}

          {/* Champs spécifiques aux employés */}
          {userType === 'employe' && (
            <div>
              <div className="mb-3">
                <label htmlFor="centre" className="form-label">
                  Centre:
                </label>
                <input
                  type="text"
                  id="centre"
                  name="centre"
                  value={formData.centre}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="salaire" className="form-label">
                  Salaire:
                </label>
                <input
                  type="text"
                  id="salaire"
                  name="salaire"
                  value={formData.salaire}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
