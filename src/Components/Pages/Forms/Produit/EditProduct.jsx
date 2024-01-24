import React from 'react'
import EditProductForm from './EditProductForm';

function EditProduct(props) {
  return (
    <div className='container mt-2 p-5'>
     
        <EditProductForm id={props.id} />
      </div>

);
  
}

export default EditProduct