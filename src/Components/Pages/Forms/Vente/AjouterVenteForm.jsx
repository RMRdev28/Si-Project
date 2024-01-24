import React,{useState, useContext, useEffect} from 'react';
import Swal from 'sweetalert2'
import ApiContext from '../../../../ApiContext';

const AjouterVenteForm = () => {
  const {ProductsC,fetchProductsC,Clients,fetchClients, insertVente} = useContext(ApiContext);
  const [typeVente,setTypeVente]= useState('');
  const [qntV,setQntV]= useState('');
  const [prixV,setPrixV]= useState('');
  const [VenteData, setVenteData] = useState({
    prdV: '',
    qntV:'',
    prixV: '',
    clientV: '',
    typeV: '',
    statuV: 'complet',
    centre: '',
    montantVer: '',
  });

  useEffect(() => { 
    fetchProductsC();
    fetchClients();

  }, [fetchProductsC]);
  const produits = ProductsC ? ProductsC.produits : [];
  const clients = Clients ? Clients.clients : [];
  const handleSubmit = (e) => {
    e.preventDefault();

    insertVente(VenteData).then(() => {
      Swal.fire(
        'Added!',
        'Your Vente has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Vente has not been added.',
        'warning'
      )
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenteData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    if(name === "typeV" && value === "partiellement"){
      setVenteData(prevData => ({
        ...prevData,
        ["statuV"]: "incomplet",
      }));
      setTypeVente('partiellement');
    }else if(name === "typeV" && value === "entièrement"){
      setVenteData(prevData => ({
        ...prevData,
        ["statuV"]: "complet",
      }));
      setTypeVente('entièrement');
      
    }
    if(name === "prixV"){
      setPrixV(value);
    }
    if(name === "qntV"){
      setQntV(value);
    }
  };

  const handleFileChange = (e) => {
/***************************** */  };

  return (
    <form onSubmit={handleSubmit} className='card' style={{"width":"500px","marginTop":"60px"}}>
          <div className="card-header">
            <h3 className="card-title">Ajouter Vente</h3>
          </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="product_name">quantité Vente</label>
          <input type="number" name="qntV" className="form-control" id="product_name" placeholder="Enter product name" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prix Vente</label>
          <input type="number" name="prixV" className="form-control" id="product_price" placeholder="Enter product price" min="1" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Product</label>
          <select name='prdV' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Product</option>
                            {produits && produits.length > 0 ? (
                                produits.map(pr => (
                                  <option value={pr.id}>{pr.desigP}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                          
          </select>
        </div>
        <div className="form-group">
          <label>Client</label>
          <select name='clientV' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Product</option>
                            {clients && clients.length > 0 ? (
                                clients.map(cl => (
                                  <option value={cl.id}>{cl.client.nom}-{cl.client.prenom}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                          
          </select>
        </div>
        <div className="form-group">
          <label>Type Achat</label>
          <select name='typeV' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Type</option>
          <option value="entièrement">Entièrement</option>
          <option value="partiellement">Partiellement</option>
                            
                          
          </select>
        </div>
        {typeVente==="partiellement" && qntV > 0 && prixV > 0 ? (<>
          <div className="form-group">
          <label htmlFor="product_price">Premier Versement</label>
          <input type="number" name="montantVer" className="form-control" id="product_price"  min="1" max={qntV*prixV}  onChange={handleInputChange} />
        </div>
        
        </>) : (<></>)}
        <div className="form-group">
          <label>Centre</label>
          <select name='centre' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Magasin</option>
          <option value="1">Centre 1</option>
          <option value="2">Centre 2</option>
          <option value="3">Centre 3</option>
                            
                          
          </select>
        </div>

       
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default AjouterVenteForm;
