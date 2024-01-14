import React from 'react';

const DeleteProduitForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product successfully deleted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_id">Nom Produit</label>
          <input type="text" name="product_id" className="form-control" id="product_id" placeholder="saisir le nom de produit" />
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-danger" value="Delete" />
      </div>
    </form>
  );
};

export default DeleteProduitForm;
