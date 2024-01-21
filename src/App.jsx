import React , { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Ventes from './Components/Pages/Tables/Ventes.jsx'
import Achat from './Components/Pages/Tables/Achat.jsx'
import Utilisateur from './Components/Pages/Tables/Utilisateurs.jsx'
import Catalogue from './Components/Pages/Tables/Catalogue'

import Products from './Components/Pages/Tables/Produits'
import AjouterProduit from './Components/Pages/Forms/Produit/AjouterProduit';
import SupprimerProduit from './Components/Pages/Forms/Produit/SupprimerProduit';
import ModifierProduit from './Components/Pages/Forms/Produit/ModifierProduit';
import ConsulterProduit from './Components/Pages/Forms/Produit/ConsulterProduit';

import ModifierAchat from './Components/Pages/Forms/Achat/ModifierAchat';
import ConsulterAchat from './Components/Pages/Forms/Achat/ConsulterAchat';

import ModifierVente from './Components/Pages/Forms/Vente/ModifierVente';
import ConsulterVente from './Components/Pages/Forms/Vente/ConsulterVente';


import AjouterUtilisateurForm from './Components/Pages/Forms/Utilisateur/AjouterUtilisateurForm';
import ModifierUtilisateur from './Components/Pages/Forms/Utilisateur/ModifierUtilisateur';
import ConsulterUtilisateur from './Components/Pages/Forms/Utilisateur/ConsulterUtilisateur';

import Sidebar from './Components/Pages/Tables/Sidebar';
import Navbar from './Components/Navbar.jsx';

import Contact from './Components/Pages/Forms/Contact.jsx';
import { Centre1, Centre2, Centre3 } from './Components/Pages/centers/center.jsx';
import AjouterAchatForm from './Components/Pages/Forms/Achat/AjouterAchatForm.jsx';
import ProduitForm from './Components/Pages/Forms/Produit/ProduitForm.jsx';
import AjouterVenteForm from './Components/Pages/Forms/Vente/AjouterVenteForm.jsx';
import ApiProvider from './ApiProvider.jsx';

function App() {
  const [showModalAchat, setShowModalAchat] = useState(false);
  const [showModalProduit, setShowModalProduit] = useState(false);
  const [showModalVente, setShowModalVente] = useState(false);
  const [showModalTransfer, setShowModalTransfer] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

    
    const handleOpenModalAchat = () => setShowModalAchat(true);
    const handleOpenModalProduit = () => setShowModalProduit(true);
    const handleOpenModalVente = () => setShowModalVente(true);
    const handleOpenModalTransfer = () => setShowModalTransfer(true);
    const handleOpenModalUser = () => setShowModalUser(true);

    const handleCloseModalAchat = () => setShowModalAchat(false);
    const handleCloseModalProduit = () => setShowModalProduit(false);
    const handleCloseModalVente = () => setShowModalVente(false);
    const handleCloseModalTransfer = () => setShowModalTransfer(false);
    const handleCloseModalUser = () => setShowModalUser(false);
    const customStyles = {
      content: {
        position:'fixed',
        top: '50%',
        left: '55%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:'none',
        zIndex:99999,
        backgroundColor:'white'
        
      },
    };

  return (
    <ApiProvider>
    <Router>
      
    <div className="d-flex">
      <Navbar/>

      <div className="col-2">
      <Sidebar 
         openModalAchat={handleOpenModalAchat} 
         openModalProduit={handleOpenModalProduit} 
         openModalVente={handleOpenModalVente} 
         openModalTransfer={handleOpenModalTransfer} 
         openModalUser={handleOpenModalUser} 
         closeModalAchat={handleCloseModalAchat}
         closeModalProduit={handleCloseModalProduit}
         closeModalVente={handleCloseModalVente}
         closeModalTransfer={handleCloseModalTransfer}
         closeModalUser={handleCloseModalUser}
      />
      </div>
 
      <div className="col-10 mt-5">
      <div className="flex-grow-1">
      <Modal
        isOpen={showModalAchat}
        onRequestClose={handleCloseModalAchat}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterAchatForm  closeModalAchat={handleCloseModalAchat}/>
        </Modal>
        <Modal
        isOpen={showModalProduit}
        onRequestClose={handleCloseModalProduit}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <ProduitForm  closeModalAchat={handleCloseModalProduit}/>
        </Modal>
        <Modal
        isOpen={showModalVente}
        onRequestClose={handleCloseModalVente}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterVenteForm  closeModalAchat={handleCloseModalVente}/>
        </Modal>
        <Modal
        isOpen={showModalTransfer}
        onRequestClose={handleCloseModalTransfer}
        
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterAchatForm  closeModalAchat={handleCloseModalTransfer}/>
        </Modal>
        <Modal
        isOpen={showModalUser}
        onRequestClose={handleCloseModalUser}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterUtilisateurForm  closeModalAchat={handleCloseModalUser}/>
        </Modal>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/center1/*" exact element={<Centre1 showModalVente={showModalVente} handleCloseModalVente = {handleCloseModalVente}/>} />
          <Route path="/center2/*" exact element={<Centre2 showModalVente={showModalVente}  handleCloseModalVente = {handleCloseModalVente}/>} />
          <Route path="/center3/*" exact element={<Centre3 showModalVente={showModalVente}  handleCloseModalVente = {handleCloseModalVente}/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/ventes" element={<Ventes/>} />
          <Route path="/achat" element={<Achat/>} />
          <Route path="/catalogue" element={<Catalogue/>} />
          <Route path="/utilisateurs" element={<Utilisateur/>} />
          <Route path="/ajouter-produit" element={<AjouterProduit />} />
          <Route path="/supprimer-produit" element={<SupprimerProduit />} />
          <Route path="/modifier-produit" element={<ModifierProduit />} />
          <Route path="/consulter-produit" element={<ConsulterProduit />} />

        
            
            <Route path="/modifier-achat" element={<ModifierAchat />} />
            <Route path="/consulter-achat" element={<ConsulterAchat />} />

           
            
            <Route path="/modifier-vente" element={<ModifierVente />} />
            <Route path="/consulter-vente" element={<ConsulterVente />} />

            
            <Route path="/modifier-utilisateur" element={<ModifierUtilisateur />} />
            <Route path="/consulter-utilisateur" element={<ConsulterUtilisateur />} />

        

       
            <Route path="/contact" element={<Contact/>} />



        </Routes>
      </div>
      </div>
    <hr />
 
    </div>
  </Router>
  <footer className='d-flex justify-content-center ms-5 mb-3'>
            
            CopyRight Mezouari Merouane Ikhlef Celina
  </footer>
  </ApiProvider>
  );
}

export default App;
