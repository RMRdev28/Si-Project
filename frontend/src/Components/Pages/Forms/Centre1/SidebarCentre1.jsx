import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./Sidebar.css";

export default function SidebarCentre1({ children }) {
  const [isProductsSubMenuOpen, setProductsSubMenuOpen] = useState(false);
  const [isAchatSubMenuOpen, setAchatSubMenuOpen] = useState(false);
  const [isCatalogueSubMenuOpen, setCatalogueSubMenuOpen] = useState(false);
  const [isClientSubMenuOpen, setClientSubMenuOpen] = useState(false);
  const [isVenteSubMenuOpen, setVenteSubMenuOpen] = useState(false);
  const [isUtilisateurSubMenuOpen, setUtilisateurSubMenuOpen] = useState(false);

  const toggleSubMenuProducts = () => {
    setProductsSubMenuOpen(!isProductsSubMenuOpen);
  };

  const toggleSubMenuAchat = () => {
    setAchatSubMenuOpen(!isAchatSubMenuOpen);
  };

  const toggleSubMenuCatalogue = () => {
    setCatalogueSubMenuOpen(!isCatalogueSubMenuOpen);
  };

  const toggleSubMenuVente = () => {
    setVenteSubMenuOpen(!isVenteSubMenuOpen);
  };

  const toggleSubMenuUtilisateur = () => {
    setUtilisateurSubMenuOpen(!isUtilisateurSubMenuOpen);
  };
  const toggleSubMenuClient = () => {
    setClientSubMenuOpen(!isClientSubMenuOpen);
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
                <span className="f5-4">AgroStock Manager</span>
              </a>
              <hr className="text-white d-none d-sm-block"></hr>
              <ul
                className="nav nav-tabs flex-column mt-2 mt-sm-0"
                id="parentM"
              >
                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white text-center text-sm-start"
                  >
                    <i className="bi bi-speedometer"></i>
                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/products"
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
                          <span className="ms-2 d-none d-sm-inline">Consulter Produit</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-produit"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter Produit
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-produit"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className=" ms-2 d-none d-sm-inline">
                            Modifier Produit
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-produit"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer Produit
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/products"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuAchat}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Achat</span>
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
                            Consulter Achat
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-achat"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter Achat
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-achat"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Modifier Achat
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-achat"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer Achat
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/catalogue"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuCatalogue}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Catalogue</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isCatalogueSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  {/* Le sous-menu Catalogue */}
                  {isCatalogueSubMenuOpen && (
                    <ul className="nav flex-column ms-2">
                      <li className="nav-item">
                        <Link
                          to="/consulter-catalogue"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Consulter Catalogue
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-catalogue"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter Catalogue
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-catalogue"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Modifier Cotologue
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-catalogue"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer Catalogue
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/ventes"
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
                            Consulter vente
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-vente"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter vente
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-vente"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Modifier vente
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-vente"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer vente
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/utilisateurs"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuUtilisateur}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">utilisateur</span>
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
                            Consulter utilisateur
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-utilisateur"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter utilisateur
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-utilisateur"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Modifier utilisateur
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-utilisateur"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer utilisateur
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/clients"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuClient}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">
                      Clients
                    </span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isClientSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  {/* Le sous-menu client */}
                  {isClientSubMenuOpen && (
                    <ul className="nav flex-column ms-2">
                      <li className="nav-item">
                        <Link
                          to="/consulter-client"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Consulter client
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/ajouter-client"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Ajouter client
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/modifier-client"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Modifier client
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/supprimer-client"
                          className="nav-link text-white text-center text-sm-start"
                        >
                          <span className="ms-2 d-none d-sm-inline">
                            Supprimer client
                          </span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/utilisateurs"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuUtilisateur}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Centre 1</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isUtilisateurSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  </li>

                  <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/utilisateurs"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuUtilisateur}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Centre2</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isUtilisateurSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  </li>
                  <li className="nav-item my-1 py-2 py-sm-0">
                  <Link
                    to="/utilisateurs"
                    className="nav-link text-white text-center text-sm-start"
                    onClick={toggleSubMenuUtilisateur}
                  >
                    <i className="bi bi-grid"></i>
                    <span className="ms-2 d-none d-sm-inline">Centre3</span>
                    <i
                      className={` ms-0 ms-sm-3 ${
                        isUtilisateurSubMenuOpen ? "rotate" : ""
                      }`}
                    ></i>
                  </Link>
                  </li>

                
              </ul>
            </div>
          </div>
          <div className="dropdown open">
            <a
              className="btn border-none btn-secondary dropdown-toggle text-white"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person f5-4"></i>
              <span className="fs-5  d-none d-sm-inline">User</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item " href="#">
                Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
