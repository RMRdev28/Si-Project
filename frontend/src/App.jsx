import React from 'react';
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

import AjoutAchat from './Components/Pages/Forms/Achat/AjoutAchat';
import SupprimerAchat from './Components/Pages/Forms/Achat/SupprimerAchat';
import ModifierAchat from './Components/Pages/Forms/Achat/ModifierAchat';
import ConsulterAchat from './Components/Pages/Forms/Achat/ConsulterAchat';

import AjouterVente from './Components/Pages/Forms/Vente/AjouterVente';
import SupprimerVente from './Components/Pages/Forms/Vente/SupprimerVente';
import ModifierVente from './Components/Pages/Forms/Vente/ModifierVente';
import ConsulterVente from './Components/Pages/Forms/Vente/ConsulterVente';

import AjouterUtilisateur from './Components/Pages/Forms/Utilisateur/AjouterUtilisateur';
import SupprimerUtilisateur from './Components/Pages/Forms/Utilisateur/SupprimerUtilisateur';
import ModifierUtilisateur from './Components/Pages/Forms/Utilisateur/ModifierUtilisateur';
import ConsulterUtilisateur from './Components/Pages/Forms/Utilisateur/ConsulterUtilisateur';

import AjouterClient from './Components/Pages/Forms/Client/AjouterClient';
import SupprimerClient from './Components/Pages/Forms/Client/SupprimerClient';
import ModifierClient from './Components/Pages/Forms/Client/ModifierClient';
import ConsulterClient from './Components/Pages/Forms/Client/ConsulterClient.jsx';

import AjouterEmploye from './Components/Pages/Forms/Employe/AjouterEmploye';
import SupprimerEmploye from './Components/Pages/Forms/Employe/SupprimerEmploye';
import ModifierEmploye from './Components/Pages/Forms/Employe/ModifierEmploye';
import ConsulterEmploye from './Components/Pages/Forms/Employe/ConsulterEmploye';

import Sidebar from './Components/Pages/Tables/Sidebar';
import Navbar from './Components/Navbar.jsx';
import Inscription from './Components/Pages/Forms/Authentification/Inscription.jsx';
import Contact from './Components/Pages/Forms/Contact.jsx';

function App() {
  return (
    <Router>
    <div className="d-flex">
      <Navbar/>
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ventes" element={<Ventes/>} />
          <Route path="/achat" element={<Achat/>} />
          <Route path="/catalogue" element={<Catalogue/>} />
          <Route path="/utilisateurs" element={<Utilisateur/>} />
          <Route path="/ajouter-produit" element={<AjouterProduit />} />
          <Route path="/supprimer-produit" element={<SupprimerProduit />} />
          <Route path="/modifier-produit" element={<ModifierProduit />} />
          <Route path="/consulter-produit" element={<ConsulterProduit />} />

          <Route path="/ajouter-achat" element={<AjoutAchat />} />
            <Route path="/supprimer-achat" element={<SupprimerAchat />} />
            <Route path="/modifier-achat" element={<ModifierAchat />} />
            <Route path="/consulter-achat" element={<ConsulterAchat />} />

            <Route path="/ajouter-vente" element={<AjouterVente />} />
            <Route path="/supprimer-vente" element={<SupprimerVente />} />
            <Route path="/modifier-vente" element={<ModifierVente />} />
            <Route path="/consulter-vente" element={<ConsulterVente />} />

            <Route path="/ajouter-utilisateur" element={<AjouterUtilisateur />} />
            <Route path="/supprimer-utilisateur" element={<SupprimerUtilisateur />} />
            <Route path="/modifier-utilisateur" element={<ModifierUtilisateur />} />
            <Route path="/consulter-utilisateur" element={<ConsulterUtilisateur />} />

            <Route path="/ajouter-client" element={<AjouterClient />} />
            <Route path="/supprimer-client" element={<SupprimerClient />} />
            <Route path="/modifier-client" element={<ModifierClient />} />
            <Route path="/consulter-client" element={<ConsulterClient />} />

            <Route path="/ajouter-employe" element={<AjouterEmploye />} />
            <Route path="/supprimer-employe" element={<SupprimerEmploye />} />
            <Route path="/modifier-employe" element={<ModifierEmploye />} />
            <Route path="/consulter-employe" element={<ConsulterEmploye />} />
            <Route path="/contact" element={<Contact/>} />



        </Routes>
      </div>

    </div>
  </Router>
  );
}

export default App;
