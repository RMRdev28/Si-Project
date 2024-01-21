import React,{useState, useContext, useEffect} from 'react';
import Swal from 'sweetalert2'
import ApiContext from '../../../../ApiContext';

const AjouterUtilisateurForm = () => {
  const [typeUser,setTypeUser]= useState('')
  const {insertUser} = useContext(ApiContext);
  const [UserData,setUserData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    zipCode: '',
    ville: '',
    typeUtilisateur: '',

      centre:'',
      sallaire:'',
    
    
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user2"+JSON.stringify(UserData))
    insertUser(UserData).then(() => {
      Swal.fire(
        'Added!',
        'Your User has been added.',
        'success'
      )
    }).catch((error) => {
      Swal.fire(
        'Problem!',
        'Your User has not been added.',
        'warning'
      )
    })
  
    

    }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'typeUtilisateur') {
      setTypeUser(value);
    }

    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
/******************** */  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{"width":"500px","marginTop":"60px"}}>
           <div className="card-header">
            <h3 className="card-title">Ajouter un utilisateur</h3>
          </div>
      <div className="card-body">  
        <div className="form-group">
          <label htmlFor="product_price">Nom </label>
          <input type="text" name="nom" className="form-control" id="product_price" placeholder="Enter Last Name " onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Prenom</label>
          <input type="text" name="prenom" className="form-control" id="product_price" placeholder="Enter First Name"onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">adresse</label>
          <input type="text" name="adresse" className="form-control" id="product_price" placeholder="Enter Adresse" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Ville</label>
          <input type="text" name="ville" className="form-control" id="product_price" placeholder="Enter Ville" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">ZipCode</label>
          <input type="text" name="zipCode" className="form-control" id="product_price" placeholder="Enter zipCode" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <label>Type Utilisateurs</label>
          <select name='typeUtilisateur' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
          <option value="">Select Type</option>
          <option value="client">Client</option>
          <option value="fournisseur">Fournisseur</option>
          <option value="employe">Employe</option>
                            
                          
          </select>
        </div>
        {typeUser === "employe" ? (
          <>
                <div className="form-group">
                  <label>Centre</label>
                  <select name='centre' className="form-control select2" style={{ width: '100%' }} defaultValue="matiere" onChange={handleInputChange}>
                  <option value="">Select Type</option>
                  <option value="1">Centre 1</option>
                  <option value="2">Centre 2</option>
                  <option value="3">Centre 3</option>
                                    
                                  
                  </select>
                </div>
                    <div className="form-group">
                        <label htmlFor="product_price">sallaire</label>
                        <input type="text" name="sallaire" className="form-control" id="product_price" placeholder="Enter Sallaire" onChange={handleInputChange}/>
                      </div>
                      </>) : (<></>)}


      </div>
      <div className="card-footer">
        <input type="submit" className="btn btn-success" value="Save" />
      </div>
    </form>
  );
};

export default AjouterUtilisateurForm;
