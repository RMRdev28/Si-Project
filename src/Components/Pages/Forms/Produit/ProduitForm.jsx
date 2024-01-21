import React, {useState, useContext} from 'react';
import Swal from 'sweetalert2'
import ApiContext from '../../../../ApiContext';

const ProduitForm = () => {
  const {insertProduct} = useContext(ApiContext);
  const [productData, setProductData] = useState({
    desigP: '',
    descP: '',
    typeP: 'matiere',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    insertProduct(productData).then(() => {
      Swal.fire(
        'Added!',
        'Your Product has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Product has not been added.',
        'warning'
      )
    })
  
    

    }





  return (
    <form onSubmit={handleSubmit} className='card' style={{"width":"500px"}}>
         <div className="card-header">
            <h3 className="card-title">Add product</h3>
          </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">Product name</label>
          <input type="text" name="desigP" className="form-control" onChange={handleInputChange} id="product_name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product_name">Product Description</label>
          <textarea type="text" name="descP" className="form-control" onChange={handleInputChange} id="product_name" placeholder="Enter product Description"></textarea>
        </div>

        <div className="form-group">
          <label>Product category</label>
          <select name='typeP' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
            <option value="matiere">Matiere Premiere</option>
            <option value="produit">Produit</option>
          </select>
        </div>
     
       
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default ProduitForm;
