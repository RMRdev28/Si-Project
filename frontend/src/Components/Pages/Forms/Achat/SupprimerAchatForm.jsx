import React from 'react';

const SupprimerAchatForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product successfully deleted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
      <div className="form-group">
          <label htmlFor="product_id">Produit</label>
          <input type="text" name="product_id" className="form-control" id="product_id" placeholder="saisir le nom de produit" />
        </div>
        <div className="form-group">
          <label htmlFor="product_id">date Achat</label>
          <input type="date" name="product_id" className="form-control" id="product_id" placeholder="saisir le nom de produit" />
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-danger" value="Delete" />
      </div>
    </form>
  );
};

export default SupprimerAchatForm;
