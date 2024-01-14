import React from 'react';

const ModifierEmployeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product successfully modified!');
  };

  const handleSelectChange = (e) => {
/*********************** */  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">Product name</label>
          <input type="text" name="product_name" className="form-control" id="product_name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Product price</label>
          <input type="number" name="product_price" className="form-control" id="product_price" placeholder="Enter product price" min="1" />
        </div>
        <div className="form-group">
          <label>Product category</label>
          <select className="form-control select2" style={{ width: '100%' }} defaultValue="Fruit" onChange={handleSelectChange}>
            <option>Fruit</option>
            <option>Juice</option>
            <option>Vegetable</option>
          </select>
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="modifier" />
      </div>
    </form>
  );
};

export default ModifierEmployeForm;
