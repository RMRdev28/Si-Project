import React, { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import ApiContext from '../../../../ApiContext';

function EditProductForm(props) {
  const { editProduct, fetchOneProduct, oneProduct } = useContext(ApiContext);
  const [isSet,setIsSet] = useState(false)
  const [productData, setProductData] = useState({
    id: props.id,
    desigP: '',
    descP: '',
    typeP: 'matiere',
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetchOneProduct(props.id);
    };

    fetchData();
  }, [props.id, fetchOneProduct]);

  useEffect(() => {

    if (oneProduct) {
      if(!isSet){
        setIsSet(true);
      setProductData({
        id: props.id,
        desigP: oneProduct.data.desigP,
        descP: oneProduct.data.descP,
        typeP: oneProduct.data.typeP || 'matiere',
      });
    }
    }
  }, [fetchOneProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editProduct(productData).then(() => {
      Swal.fire(
        'Added!',
        'Your Product has been eidted.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Product has not been edited.',
        'warning'
      )
    });
  };

  return (
    <form onSubmit={handleSubmit} className='card' style={{ "width": "500px" }}>
      <div className="card-header">
        <h3 className="card-title">Edit product</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">Product name</label>
          <input type="text" name="desigP" className="form-control" onChange={handleInputChange} value={productData.desigP} id="product_name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product_description">Product Description</label>
          <textarea name="descP" className="form-control" onChange={handleInputChange} value={productData.descP} id="product_description" placeholder="Enter product Description"></textarea>
        </div>
        <div className="form-group">
          <label>Product category</label>
          <select name='typeP' className="form-control select2" style={{ width: '100%' }} onChange={handleInputChange} value={productData.typeP}>
            <option value="matiere">Matiere Premiere</option>
            <option value="produit">Produit</option>
          </select>
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Edit" />
      </div>
    </form>
  )
}

export default EditProductForm;
