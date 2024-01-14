import React from 'react';

const SupprimerClientForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product successfully deleted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_id">login client</label>
          <input type="email" name="product_id" className="form-control" id="product_id" placeholder="saisir le nom de produit" />
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-danger" value="Delete" />
      </div>
    </form>
  );
};

export default SupprimerClientForm;
