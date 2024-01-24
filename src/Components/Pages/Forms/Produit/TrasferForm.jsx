import React,{useState, useContext, useEffect} from 'react'
import ApiContext from '../../../../ApiContext';

function TrasferForm(props) {
  const {insertTransfert,fetchOneProduct,oneProduct} = useContext(ApiContext);
  const [transfertData,setTransfertData] = useState({
    prdT: props.id,
    centreT: '',
    qntT: '',
    dateT: '',    
  });
  useEffect(()=>{
    fetchOneProduct(props.id);
  },fetchOneProduct);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransfertData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    insertTransfert(transfertData).then(() => {
      Swal.fire(
        'Added!',
        'Your Transfert has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Transfert has not been added.',
        'warning'
      )
    })
  
    

    }
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
                
    <div className="alert alert-success">
      <h4>Ajouter Transfer</h4>
    </div>
    <div className=" mb-3 border border-2 p-3">
        <div className="row mt-2 "> 
        <div className="">
          <div className="input-group mb-3">
            <select className='form-select' name="centreT" onChange={handleInputChange}>
              <option value="">Choisir Centre </option>
              <option value="1">Centre 1</option>
              <option value="2">Centre 2</option>
              <option value="3">Centre 3</option>

            </select>
          </div>
        </div>

                        
                    <div className="input-group mb-3">
                        {oneProduct ? (
                                 <input type="number" name="qntT" onChange={handleInputChange}  class="form-control" min="1" max={oneProduct.data.qntEnStock}  aria-describedby="basic-addon1" placeholder="Quantite" />
                        ) : (<></>)}
                 
                        </div>
                   
                    
                    <div className="input-group mb-3">
                        
                        <input type="datetime-local" name="dateT" onChange={handleInputChange} class="form-control"  aria-describedby="basic-addon1" placeholder="Date" />
                        </div>
                      
                   
                    
                    <div className="input-group mb-3">
                        
                        <input type="submit" className="btn btn-success"  value="Save" />
                        </div>
                      
                               
      </div>


  </div>


</form>
  )
}

export default TrasferForm