import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Produits from "./Components/Pages/Tables/Produits";
import AjouterProduit from './Components/Pages/Forms/Produit/AjouterProduit';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/products" exact component={Produits} />
        <Route path="/products/ajouter" exact component={AjouterProduit} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
