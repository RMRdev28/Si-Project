import React, { useContext, useEffect } from 'react'
import {Chart as chartjs} from "chart.js/auto";

import { Bar, Doughnut, Line } from 'react-chartjs-2'

import ApiContext from '../ApiContext';

export default function Dashboard() {
  const { Dashboard, fetchDashboardData, fetchGraphData, Graph,fetchCircleData,Circle,fetchChartData,Chart,fetchTopC,fetchTopF,TopF,TopC} = useContext(ApiContext)
  useEffect(() => {
    fetchDashboardData()
    fetchCircleData()
    fetchGraphData()
    fetchChartData()
    fetchTopC()
    fetchTopF()
  }, [fetchDashboardData, fetchGraphData, fetchCircleData,fetchChartData, fetchTopC,fetchTopF]);
  return (
    <div className='container mt-3'>
          <div className="cards d-flex justify-content-around">
            <div className="card text-bg-primary mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Employes</h5>
                {Dashboard ?( <p className="card-text">{Dashboard.data.nbrEmploye}</p>) : (<></>)}
               
              </div>
            </div>
            <div className="card text-bg-info mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Produits</h5>
                {Dashboard ?( <p className="card-text">{Dashboard.data.nbrProduit}</p>) : (<></>)}
              </div>
            </div>
            <div className="card text-bg-warning mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Achats</h5>
                {Dashboard ?( <p className="card-text">{Dashboard.data.nbrAchat}</p>) : (<></>)}
              </div>
            </div>
            <div className="card text-bg-danger mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Ventes</h5>
                {Dashboard ?( <p className="card-text">{Dashboard.data.nbrVente}</p>) : (<></>)}
              </div>
            </div>
            <div className="card text-bg-success  mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Benifices</h5>
                {Dashboard ?( <p className="card-text">{Dashboard.data.benifice} DA</p>) : (<></>)}
              </div>
            </div>
            
          </div>
          <div className="row d-flex">
            {Graph ? (
               <div className="col-6 p-3  border border-2">
               <Bar 
                 data={{
                   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                   datasets:[
                     {
                       label: "Revenu",
                       data: Graph.data,
                     },
               
                   ],
                 }}
               />
             </div>
            ) : (<></>)}
           
            {Circle ? (
               <div className="col-6 p-3 border border-2">
               <Doughnut 
                   data={{
                     labels: ["Produit","Matiere Premier"],
                     datasets:[
                       {
                         label: "Produits",
                         data: Circle.data,
                         borderRadius: 2,
                       },
                     ],
                   }}
                 />
                 
               </div>
            ) : (<></>)}
           
          </div>
          {Chart ? (
            <div className="row mt-2 mb-3 p-4 border border-2">
            <Line
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    datasets:[
                      {
                        label: "Achat",
                        data: Chart.data.achat,
                        backgroundColor:"#064FF0",
                        borderColor: "#064FF0",
                      },
                      {
                        label: "Vente",
                        data: Chart.data.vente,
                        backgroundColor:"#C10C3A",
                        borderColor: "#C10C3A",
                      },
                    ],
                  }}
            />
          </div>
          ) : (<></>)}
          

          <div className="row d-flex mb-3">
            {TopF ? (
                 <div className="col-6">
                 <div className="card" style={{"height":"300px","overflow":"auto"}}>
                   <div className="card-header">
                     <h5>Top fournisseurs</h5>
                   </div>
                   <div className="card-body">
                   {TopF.data.map(f => (
                    <>
                           <div className="bg-light p-3">
                           <h6>{f.fournisseur.nom}-{f.fournisseur.prenom}</h6>
                         </div>
                            <hr />
                          </>
                   ))}
              
                    
                      
                   </div>
                 </div>
               </div>
            ) : (<></>)}
             {TopC ? (
                    <div className="col-6">
                    <div className="card" style={{"height":"300px","overflow":"auto"}}>
                      <div className="card-header ">
                        <h5 >Top clients</h5>
                      </div>
                      <div className="card-body">
                      {TopC.data.map(f => (
                    <>
                           <div className="bg-light p-3">
                           <h6>{f.client.nom}-{f.client.prenom}</h6>
                         </div>
                            <hr />
                          </>
                   ))}
                  
                      </div>
                      
                      
                    </div>
                  </div>
             ) : (<></>)}
            
          </div>

    </div>
  )
}
