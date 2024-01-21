import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./Sidebar.css";
import AjouterProduit from "../Forms/Produit/AjouterProduit";

export default function Sidebar(props) {
  const location = useLocation();
  const path = location.pathname;
  const [isProductsSubMenuOpen, setProductsSubMenuOpen] = useState(false);
  const [isAchatSubMenuOpen, setAchatSubMenuOpen] = useState(false);
  const [isCenterSubMenuOpen, setCenterSubMenuOpen] = useState(false);
  const [isVenteSubMenuOpen, setVenteSubMenuOpen] = useState(false);
  const [isUtilisateurSubMenuOpen, setUtilisateurSubMenuOpen] = useState(false);
  
  const toggleSubMenuProducts = () => {
    setProductsSubMenuOpen(!isProductsSubMenuOpen);
  };

  const toggleSubMenuAchat = () => {
    setAchatSubMenuOpen(!isAchatSubMenuOpen);
  };


  const toggleSubMenuVente = () => {
    setVenteSubMenuOpen(!isVenteSubMenuOpen);
  };

  const toggleSubMenuUtilisateur = () => {
    setUtilisateurSubMenuOpen(!isUtilisateurSubMenuOpen);
  };
  const toggleSubMenuCenter = () => {
    setCenterSubMenuOpen(!isCenterSubMenuOpen);
  };

  return (
    <div className="container-fluid ">
      <div className="row">
      <div className="cool-auto col-12 col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100 fixed-top">
          <div className="mt-2">
            <a
              className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
              role="button"
              data-bs-toggle="collapse"
              href="#sidebarCollapse"
              aria-expanded="false"
            >
              {/*<span className="f5-4">☰</span>*/}
            </a>
            <div className="collapse d-sm-block" id="sidebarCollapse">
              <a
                className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
                role="button"
              >
                <span className="f5-4">RMR Manager</span>
              </a>
              <hr className="text-white d-none d-sm-block"></hr>
              <ul
                className="nav nav-tabs flex-column mt-2 mt-sm-0"
                id="parentM"
              >
                {(path !== '/centre1' && path !== '/centre2' && path !== '/centre3') && (
                                <li className="nav-item my-1 py-2 py-sm-0">
                                <Link
                                  to="/dashboard"
                                  className="nav-link text-white text-center text-sm-start"
                                >
                                  <i className="bi bi-speedometer"></i>
                                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                </Link>
                              </li>
                ) || (
                  <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white text-center text-sm-start"
                  >
                    <i className="bi bi-speedometer"></i>
                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                )}
    
                {(path !== '/centre1' && path !== '/centre2' && path !== '/centre3') && (
                     <li className="nav-item my-1 py-2 py-sm-0">
                     <Link
                     to="#"
                       style={{"cursor":"pointer"}}
                       className="nav-link text-white text-center text-sm-start"
                       onClick={toggleSubMenuProducts}
                     >
                       <i className="bi bi-grid"></i>
                       <span className="ms-2 d-none d-sm-inline">Produits</span>
                       <i
                         className={` ms-0 ms-sm-3 ${
                           isProductsSubMenuOpen ? "rotate" : ""
                         }`}
                       ></i>
                     </Link>
                     {/* Le sous-menu Produit */}
                     {isProductsSubMenuOpen && (
                       <ul className="nav flex-column ms-2">
                         <li className="nav-item">
                           <Link
                             to="/consulter-produit"
                             className="nav-link text-white text-center text-sm-start">
                             <span className="ms-2 d-none d-sm-inline">Liste Produits</span>
                           </Link>
                         </li>
                         <li className="nav-item" onClick={props.openModalProduit}>
                           <Link
                             to="#"
                             className="nav-link text-white text-center text-sm-start"
                           >
                             <span className="ms-2 d-none d-sm-inline">
                               Ajouter Produit
                             </span>
                           </Link>
                         </li>
                       </ul>
                     )}
                   </li>
                )}
             
                {(path !== '/centre1' && path !== '/centre2' && path !== '/centre3') && (
                     <li className="nav-item my-1 py-2 py-sm-0">
                     <Link
                     style={{"cursor":"pointer"}}
                       to="#"
                       className="nav-link text-white text-center text-sm-start"
                       onClick={toggleSubMenuAchat}
                     >
                       <i className="bi bi-grid"></i>
                       <span className="ms-2 d-none d-sm-inline">Achats</span>
                       <i
                         className={` ms-0 ms-sm-3 ${
                           isAchatSubMenuOpen ? "rotate" : ""
                         }`}
                       ></i>
                     </Link>
                     {/* Le sous-menu Achat*/}
                     {isAchatSubMenuOpen && (
                       <ul className="nav flex-column ms-2">
                         <li className="nav-item">
                           <Link
                             to="/consulter-achat"
                             className="nav-link text-white text-center text-sm-start"
                           >
                             <span className="ms-2 d-none d-sm-inline">
                             Liste Achats
                             </span>
                           </Link>
                         </li>
                         <li className="nav-item" onClick={props.openModalAchat}>
                           <Link to='#' className="nav-link text-white text-center text-sm-start">
                           <span className="ms-2 d-none d-sm-inline">
                               Ajouter Achat
                             </span>
                           </Link>
                          
                          
                         </li>
                       </ul>
                     )}
                   </li>
                )}
             
             

                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="#"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuVente}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Ventes</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isVenteSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  {/* Le sous-menu Vente*/}
                  {isVenteSubMenuOpen && (
                    <ul className="nav flex-column ms-2">
                      <li className="nav-item">
                        <Link
                          to="/consulter-vente"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                          Liste ventes
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item" onClick={props.openModalVente}>
                        <Link
                         to="#"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter vente
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                    {(path !== '/centre1' && path !== '/centre2' && path !== '/centre3') && (
                          <li className="nav-item my-1 py-2 py-sm-0">
                          <Link
                            to="#"
                            className="nav-link text-white text-center text-sm-start"
                            onClick={toggleSubMenuUtilisateur}
                          >
                            <i className="bi bi-grid"></i>
                            <span className="ms-2 d-none d-sm-inline">utilisateurs</span>
                            <i
                              className={` ms-0 ms-sm-3 ${
                                isUtilisateurSubMenuOpen ? "rotate" : ""
                              }`}
                            ></i>
                          </Link>
                          {/* Le sous-menu utilisateur */}
                          {isUtilisateurSubMenuOpen && (
                            <ul className="nav flex-column ms-2">
                              <li className="nav-item">
                                <Link
                                  to="/consulter-utilisateur"
                                  className="nav-link text-white text-center text-sm-start"
                                >
                                  <span className="ms-2 d-none d-sm-inline">
                                  Liste utilisateurs
                                  </span>
                                </Link>
                              </li>
                              <li className="nav-item" onClick={props.openModalUser}>
                                <Link
                                  to="#"
                                  className="nav-link text-white text-center text-sm-start"
                                >
                                  <span className="ms-2 d-none d-sm-inline">
                                    Ajouter utilisateur
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
        
                    )|| (
                      <li className="nav-item my-1 py-2 py-sm-0">
                      <Link
                        to="/consulter-utilisateur"
                        className="nav-link text-white text-center text-sm-start"
                        
                      >
                        <i className="bi bi-grid"></i>
                        <span className="ms-2 d-none d-sm-inline">Employe</span>
                        <i
                          className={` ms-0 ms-sm-3 ${
                            isUtilisateurSubMenuOpen ? "rotate" : ""
                          }`}
                        ></i>
                      </Link>
                      </li>
                    )}
            
                {(path !== '/centre1' && path !== '/centre2' && path !== '/centre3')  && (
                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/utilisateurs"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuCenter}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Centres</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isCenterSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  {isCenterSubMenuOpen && (
                    <ul className="nav flex-column ms-2">
                      <li className="nav-item">
                        <Link
                          to="/centre1"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                          Center 1
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/centre2"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Center 2
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/centre3"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Center 3
                          </span>
                        </Link>
                      </li>
                      
                    </ul>
                  )}
                  </li>
                )||(
                  <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/"
                    className="nav-link text-white text-center text-sm-start"
                    
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Magasin</span>
                  </Link>
                  </li>
                )}

          

                
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
