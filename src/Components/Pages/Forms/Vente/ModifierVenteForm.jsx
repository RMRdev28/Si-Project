import React from 'react';

const   ModifierVenteForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form successfully submitted!');
  };

  const handleSelectChange = (e) => {
/************************************* */  };

  const handleFileChange = (e) => {
/******************************** */  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">quantité Vente</label>
          <input type="number" name="product_name" className="form-control" id="product_name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prix Vente</label>
          <input type="number" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Date Vente</label>
          <input type="date" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Produit</label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Client</label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Type Vente</label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Centre</label>
          <input type="text" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
       
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default ModifierVenteForm;
