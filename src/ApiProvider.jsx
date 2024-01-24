// ApiProvider.js
import React, { useState } from 'react';
import ApiContext from './ApiContext';

const ApiProvider = ({ children }) => {
    const [Products, setProducts] = useState(null);
    const [oneProduct, setOneProduct] = useState(null);
    const [ProductsC, setProductsC] = useState(null);
    const [User, setUser] = useState(null);
    const [messageData, setMessageData] = useState(null);
    const [Dashboard, setDashboard] = useState(null);
    const [Graph, setGraph] = useState(null);
    const [Circle, setCircle] = useState(null);
    const [Chart, setCharData] = useState(null);
    const [MasAbs, setMasAbs] = useState(null);
    const [Transfert, setTransfert] = useState(null);
    const [TopF, setTopF] = useState(null);
    const [TopC, setTopC] = useState(null);
    const [Users, setUsers] = useState(null);
    const [Achats, setAchats] = useState(null);
    const [Ventes, setVentes] = useState(null);
    const [Fournisseurs, setFournisseurs] = useState(null);
    const [Clients, setClients] = useState(null);
    const [Notifications, setNotifications] = useState(null);
    const [detailAchat,setDetailAchat] = useState('');
    const [detailVente,setDetailVente] = useState('');
    const [sallaireMois,setSallaireMois] = useState('');
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
    const fetchDashboardData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/');
            const data = await response.json();
            setDashboard(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchGraphData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/win');
            const data = await response.json();
            setGraph(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchChartData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/nbracahtvent');
            const data = await response.json();
            setCharData(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchTopF = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/topf');
            const data = await response.json();
            setTopF(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchTopC = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/topc');
            const data = await response.json();
            setTopC(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchCircleData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/dashboard/prd');
            const data = await response.json();
            setCircle(data);
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
    const fetchSallaireMoisEmploye = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/employer/sallair/${id}`);
            const data = await response.json();
            setSallaireMois(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchUserInfo = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/info/user/${id}`);
            const data = await response.json();
            setUser(data);
           
        } catch (error) {
            console.error(error);
        }
    };
    const fetchMasAbs = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/info/employe/${id}`);
            const data = await response.json();
            setMasAbs(data);

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
    
    const fetchTransfert = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/produits/transfert/${id}`);
            const data = await response.json();
            setTransfert(data);
        } catch (error) {
            console.error(error);
        }
    };    
    const fetchOneProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/produit/${id}`);
            const data = await response.json();
            setOneProduct(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchDetailAchat = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/achat/versement/${id}`);
            const data = await response.json();
            setDetailAchat(data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchDetailVente = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/vente/versement/${id}`);
            const data = await response.json();
            setDetailVente(data);
        } catch (error) {
            console.error(error);
        }
    };
    
    
    const employeAbssence = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/emps/abssent/${id}`);
            const data = await response.json()
            setMessageData(data)
        } catch (error) {
            console.error(error);
        }
    }
  
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
    const editProduct = async (productData) => {
        console.log(JSON.stringify(productData))
        try {
            const response = await fetch('http://localhost:8000/api/edit/produit/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(productData),
            });
            console.log(response);
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
           console.log(JSON.stringify(achatData)) 
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
    const insertTransfert = async (transfertData) => {
        try {
           console.log(JSON.stringify(transfertData)) 
            const response = await fetch('http://localhost:8000/api/create/transfert/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(transfertData),
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

    const insertVersement = async (versementData) => {
        try {
           console.log(JSON.stringify(versementData))
            const response = await fetch('http://localhost:8000/api/create/versement/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(versementData),
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
    const insertMasrouf = async (masroufData) => {
        try {
           console.log(JSON.stringify(masroufData))
            const response = await fetch('http://localhost:8000/api/create/masrouf/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(masroufData),
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



    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/suppimer/produit/${id}`);
            const data = await response.json();
            
        } catch (error) {
            console.error(error);
        }
    };
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/suppimer/user/${id}`);
            const data = await response.json();
            
        } catch (error) {
            console.error(error);
        }
    };
    const deleteAchat = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/suppimer/achat/${id}`);
            const data = await response.json();
            
        } catch (error) {
            console.error(error);
        }
    };
    const deleteVente = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/suppimer/vente/${id}`);
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
        <ApiContext.Provider value={{ Products,editProduct,deleteProduct,Notifications,getNotifications, markasread, Achats, fetchAchats , fetchFournisseurs,  Fournisseurs, fetchProductsall, fetchVentes, Ventes, fetchClients, Clients,ProductsC,fetchProductsC , fetchUsers, Users, insertProduct, insertAchat, insertUser, insertVente,fetchUserInfo, User, fetchMasAbs, MasAbs,fetchDashboardData,Dashboard, fetchGraphData,Graph,fetchCircleData,Circle,Chart,fetchChartData,fetchTopF,fetchTopC,TopF,TopC,deleteUser,deleteAchat,deleteVente, fetchTransfert,Transfert,insertTransfert, fetchOneProduct, oneProduct,employeAbssence,messageData,detailAchat,fetchDetailAchat,fetchDetailVente,detailVente,insertVersement,insertMasrouf,fetchSallaireMoisEmploye,sallaireMois}}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;
