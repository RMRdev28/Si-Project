import React from 'react';

const ModifierProduitForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form successfully submitted!');
  };

  const handleSelectChange = (e) => {
/*********************** */  };

  const handleFileChange = (e) => {
/********************** */  };

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
        <label htmlFor="product_image">Product image</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="product_image" onChange={handleFileChange} />
            <label className="custom-file-label" htmlFor="product_image">Choose file</label>
          </div>
          <div className="input-group-append">
            <span className="input-group-text">Upload</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default ModifierProduitForm;
