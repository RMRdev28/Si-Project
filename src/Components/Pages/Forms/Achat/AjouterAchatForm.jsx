import React,{useState, useContext, useEffect} from 'react';
import Swal from 'sweetalert2'
import ApiContext from '../../../../ApiContext';

const AjouterAchatForm = () => {
  const {ProductsC,fetchProductsC,Fournisseurs,fetchFournisseurs, insertAchat} = useContext(ApiContext);
  const [AchatData, setAchatData] = useState({
    prdA: '',
    qntA: '',
    prixA: '',
    fournisseurA: '',
    typeA: '',
    dateA: '',
    statuA: 'complet'

  });

  const produits = ProductsC ? ProductsC.produits : [];
  const fournisseurs = Fournisseurs ? Fournisseurs.fournisseurs : [];

  useEffect(() => { 
    fetchProductsC();
    fetchFournisseurs();
  }, [fetchProductsC]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    insertAchat(AchatData).then(() => {
      Swal.fire(
        'Added!',
        'Your Achat has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your Achat has not been added.',
        'warning'
      )
    })
  
    

    }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAchatData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    if(name === "typeA" && value === "partiellement"){
      setAchatData(prevData => ({
        ...prevData,
        ["statuA"]: "incomplet",
      }));
    }else if(name === "typeA" && value === "entièrement"){
      setAchatData(prevData => ({
        ...prevData,
        ["statuA"]: "complet",
      }));
    }

  };

  const handleFileChange = (e) => {
/************************* */  };

  return (


   
    <form onSubmit={handleSubmit} className='card' style={{"width":"500px"}}>
    
    <div className="card-header">
            <h3 className="card-title">Ajouter Achat</h3> 
</div>
      <div className="card-body">
      <div className="form-group">
          <label>Product</label>
          <select name='prdA' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Product</option>
                            {produits && produits.length > 0 ? (
                                produits.map(pr => (
                                  <option value={pr.id}>{pr.desigP}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                          
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="product_name">Quantite Achat</label>
          <input type="number" name="qntA" className="form-control" id="product_name" placeholder="Enter product Quantite" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prix Achat</label>
          <input type="number" name="prixA" className="form-control" id="product_price" placeholder="Enter product price" min="1"  onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prix Achat</label>
          <input type="date" name="dateA" className="form-control" id="product_price"  min="1"  onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Type Achat</label>
          <select name='typeA' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Type</option>
          <option value="entièrement">Entièrement</option>
          <option value="partiellement">Partiellement</option>
                            
                          
          </select>
        </div>

        <div className="form-group">
          <label>Fournisseur</label>
          <select name='fournisseurA' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Fournisseur</option>
                            {fournisseurs && fournisseurs.length > 0 ? (
                                fournisseurs.map(fr => (
                                  <option value={fr.id}>{fr.fournisseur.nom}-{fr.fournisseur.prenom}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                          
          </select>
        </div>
      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default AjouterAchatForm;
