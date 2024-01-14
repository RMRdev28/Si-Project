import React from 'react';

const ModifierClientForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form successfully submitted!');
  };

  const handleSelectChange = (e) => {
    // Gérez les changements de sélection ici
  };

  const handleFileChange = (e) => {
/********************* */  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">login client</label>
          <input type="email" name="product_name" className="form-control" id="product_name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Mot de passe</label>
          <input type="password" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Nom </label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prenom</label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Numero de telephone</label>
          <input type="number" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default ModifierClientForm;
