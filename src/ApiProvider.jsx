// ApiProvider.js
import React, { useState } from 'react';
import ApiContext from './ApiContext';

const ApiProvider = ({ children }) => {
    const [Products, setProducts] = useState(null);
    const [ProductsC, setProductsC] = useState(null);
    const [User, setUser] = useState(null);
    const [Users, setUsers] = useState(null);
    const [Achats, setAchats] = useState(null);
    const [Ventes, setVentes] = useState(null);
    const [Fournisseurs, setFournisseurs] = useState(null);
    const [Clients, setClients] = useState(null);
    const [Notifications, setNotifications] = useState(null);

    // Function to fetch achats
    const fetchAchats = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/achats/');
            const data = await response.json();
            setAchats(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchVentes = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/ventes/');
            const data = await response.json();
            setVentes(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchUserInfo = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/info/user/${id}`);
            const data = await response.json();
            setUser(data);
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };


    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/utilisateurs/');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchFournisseurs = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/fournisseurs/');
            const data = await response.json();
            setFournisseurs(data);
        } catch (error) {
            console.error(error);
        }
    };    
  
    const insertProduct = async (productData) => {
        try {
            const response = await fetch('http://localhost:8000/api/create/produit/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(productData),
            });
            
            if (response.ok) {

                return 1
            } else {
                return 0
            }
          } catch (error) {
            console.error('Error:', error);
          }
    };    
    const insertAchat = async (achatData) => {
        try {
           console.log(achatData) 
            const response = await fetch('http://localhost:8000/api/create/achat/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(achatData),
            });
            console.log(response)
            if (response.ok) {

                return 1
            } else {
                return 0
            }
          } catch (error) {
            console.error('Error:', error);
            alert(error)
          }
    };  
    const insertVente = async (venteData) => {
        try {
           console.log(JSON.stringify(venteData)) 
            const response = await fetch('http://localhost:8000/api/create/vente/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(venteData),
            });
            console.log(response)
            if (response.ok) {

                return 1
            } else {
                return 0
            }
          } catch (error) {
            console.error('Error:', error);
            alert(error)
          }
    };  
    const insertUser = async (userData) => {
        let url
        console.log("user"+userData)
        try {

            const response = await fetch('http://localhost:8000/api/create/user/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
            console.log(response)
            if (response.ok) {

                return 1
            } else {
                return 0
            }
          } catch (error) {
            console.error('Error:', error);
            alert(error)
          }
    };  


    const fetchClients = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/clients/');
            const data = await response.json();
            setClients(data);
        } catch (error) {
            console.error(error);
        }
    };        
        // Function to fetch products
    const fetchProductsC = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/produits/');
            const data = await response.json();
            setProductsC(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchProductsall = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/produitsall/');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Additional functions for other API interactions
    const editProduct = async (id) => {
        // Implementation
    };
    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/suppimer/produit/${id}`);
            const data = await response.json();
            
        } catch (error) {
            console.error(error);
        }
    };

    const getNotifications = async () =>{
        try {
            const response = await fetch('http://localhost:8000/api/getnotifications/');
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error(error);
        }
    }
    const markasread = async () =>{
        try {
            const response = await fetch('http://localhost:8000/api/markasread/');
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    // You can define as many functions as you need

    return (
        <ApiContext.Provider value={{ Products,editProduct,deleteProduct,Notifications,getNotifications, markasread, Achats, fetchAchats , fetchFournisseurs,  Fournisseurs, fetchProductsall, fetchVentes, Ventes, fetchClients, Clients,ProductsC,fetchProductsC , fetchUsers, Users, insertProduct, insertAchat, insertUser, insertVente,fetchUserInfo, User}}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;
