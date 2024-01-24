import React, { useContext, useState } from 'react'
import ApiContext from '../../../../ApiContext';

function VersementAchatForm(props) {
    const {insertVersement} = useContext(ApiContext);
    const [versemntData,setVersemntData] = useState({
        achat : props.id,
        montantVer : '',
        vente : '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVersemntData(prevData => ({
          ...prevData,
          [name]: value,
        }));
    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        insertVersement(versemntData).then(() => {
          Swal.fire(
            'Added!',
            'Your Versemnt has been added.',
            'success'
          )
        }).catch((error) => {
          Swal.fire(
            'Problem!',
            'Your Versment has not been added.',
            'warning'
          )
        })
      
        
    
        }
  return (
    <form className='card p-3' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product_name">Montant</label>
          <input type="number" name="montantVer" min="1" max={props.reste} className="form-control" onChange={handleInputChange} id="product_name" placeholder="Enter Montant" />
        </div>
        <div className="form-group mt-3">
          
          <input type="submit" className='btn btn-success' value="submit" />
        </div>
    </form>
  )
}

export default VersementAchatForm