import React from 'react'
import {Chart as chartjs} from "chart.js/auto";

import { Bar, Doughnut, Line } from 'react-chartjs-2'

export default function Dashboard() {
  return (
    <div className='container mt-3'>
          <div className="cards d-flex justify-content-around">
            <div className="card text-bg-primary mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Employes</h5>
                <p className="card-text">20</p>
              </div>
            </div>
            <div className="card text-bg-info mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Produits</h5>
                <p className="card-text">20</p>
              </div>
            </div>
            <div className="card text-bg-warning mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Achats</h5>
                <p className="card-text">30
                </p>
              </div>
            </div>
            <div className="card text-bg-danger mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Nombre Ventes</h5>
                <p className="card-text">10</p>
              </div>
            </div>
            <div className="card text-bg-success  mb-3" style={{"width": "12rem","maxHeight":"100px"}}>
              <div className="card-body">
                <h5 className="card-title">Benifices</h5>
                <p className="card-text">10000da</p>
              </div>
            </div>
            
          </div>
          <div className="row d-flex">
            <div className="col-6 p-3  border border-2">
              <Bar 
                data={{
                  labels: ["A","B","C"],
                  datasets:[
                    {
                      label: "Revenu",
                      data: [200,300,400],
                    },
                    {
                      label: "Loss",
                      data: [20,30,40],
                    },
                  ],
                }}
              />
            </div>
            <div className="col-6 p-3 border border-2">
            <Doughnut 
                data={{
                  labels: ["A","B","C"],
                  datasets:[
                    {
                      label: "Revenu",
                      data: [20,30,40],
                      borderRadius: 2,
                    },
                  ],
                }}
              />
              
            </div>
          </div>
          <div className="row mt-2 mb-3 p-4 border border-2">
            <Line
                  data={{
                    labels: ["A","B","C","E","F","G","H"],
                    datasets:[
                      {
                        label: "Revenu",
                        data: [20,10,30,40,20,10,5,40],
                        backgroundColor:"#064FF0",
                        borderColor: "#064FF0",
                      },
                    ],
                  }}
            />
          </div>

          <div className="row d-flex mb-3">
                <div className="col-6">
                  <div className="card" style={{"height":"300px","overflow":"auto"}}>
                    <div className="card-header">
                      <h5>Top fournisseurs</h5>
                    </div>
                    <div className="card-body">
                    <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card" style={{"height":"300px","overflow":"auto"}}>
                    <div className="card-header ">
                      <h5 >Top clients</h5>
                    </div>
                    <div className="card-body">
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                        <div className="bg-light p-3">
                          <h6>Mezouari Merouane</h6>
                        </div>
                        <hr />
                    </div>
                    
                    
                  </div>
                </div>
          </div>

    </div>
  )
}
