import React,{useContext, useState,useEffect} from 'react'
import ApiContext from '../../../../ApiContext';

function MasroufForm(props) {
    const {insertMasrouf,fetchSallaireMoisEmploye,sallaireMois} = useContext(ApiContext);
    const [masroufData,setMasroufData] = useState({
        montantMA : '',
        dateMA : '',
        empMA: props.id,
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setMasroufData(prevData => ({
        ...prevData,
        [name]: value,
      }));
  
  };
  useEffect(()=>{
    fetchSallaireMoisEmploye(props.id) 
  },[fetchSallaireMoisEmploye])
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    insertMasrouf(masroufData).then(() => {
      Swal.fire(
        'Added!',
        'Your Masrouf has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Masrouf has not been added.',
        'warning'
      )
    })
  
    
  
    }
  
  return (
    <>
    <div className="alert alert-success">
        Sallaire du Mois: {sallaireMois ? (<span>{sallaireMois.data}</span>): (<></>)}
    </div>
    <form className='card p-3' onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="product_name">Montant</label>
      <input type="number" name="montantMA" min="1"  className="form-control" onChange={handleInputChange} id="product_name" placeholder="Enter Montant" />
    </div>
    <div className="form-group">
      <label htmlFor="product_name">Date</label>
      <input type="date" name="dateMA"   className="form-control" onChange={handleInputChange} id="product_name" placeholder="Enter Montant" />
    </div>
    <div className="form-group mt-3">
      
      <input type="submit" className='btn btn-success' value="Save" />
    </div>
  </form>
  </>
  )
}

export default MasroufForm