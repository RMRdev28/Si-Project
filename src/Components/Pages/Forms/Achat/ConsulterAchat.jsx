import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import DetailAchat from './DetailAchat';

export default function ConsulterAchat() {
  const { Achats, fetchAchats,fetchFournisseurs,Fournisseurs,fetchProductsall,Products,deleteAchat } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterType1, setFilterType1] = useState('');
  const [showDetailAchatModal, setShowDetailAchatModal] = useState(false);
  const [idAchat, setIdAchat] = useState('');
  const [totalAchat, setTotalAchat] = useState('');
  const [filterType2, setFilterType2] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleOpenModalDetail = (id,qnt,prix) => {setShowDetailAchatModal(true); setIdAchat(id); setTotalAchat(qnt*prix)};
  const handleCloseModalDetail = () => setShowDetailAchatModal(false);
  useEffect(() => {
    fetchFournisseurs()
    fetchProductsall()
    fetchAchats();
  }, [fetchAchats]);
  const fournisseurs = Fournisseurs ? Fournisseurs.fournisseurs : [];
  const produits = Products ? Products.produits : [];
  const achats = Achats ? Achats.achats : [];
  const handleDelete = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAchat(id).then(() => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }).catch((error) => {
          Swal.fire(
            'Failed!',
            'There was a problem deleting your file.',
            'error'
          )
        });
      }
    })
    
  }
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
      backgroundColor:'white',
      height: "500px",
      overFlow:'auto',
      
    },
  };

  const filteredAchats = filterType1 ? achats.filter(ac => ac.prdA.id == filterType1) : achats;
  const filteredAchats2 = filterType2 ? filteredAchats.filter(ac => ac.fournisseurA.id == filterType2) : filteredAchats;
  const filteredAchatsByDateRange = startDate && endDate 
    ? filteredAchats2.filter(ac => {
        const date = new Date(ac.dateA);
        return date >= new Date(startDate) && date <= new Date(endDate);
      })
    : filteredAchats2;
  const currentItems = filteredAchatsByDateRange.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredAchatsByDateRange.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
      
        <div className='containre mt-2 p-5'>
             <div className="mt-3">
                
                  <div className="alert alert-success">
                    <h4>Achats</h4>
                  </div>
                  <div className=" mb-3 border border-2 p-3">
                      <div className="row mt-2 "> 
                      <div className="col-3">
                        <div className="input-group mb-3">
                          <select className='form-select' onChange={e => setFilterType1(e.target.value)}>
                            <option value="">Filter by Product</option>
                            {produits && produits.length > 0 ? (
                                produits.map(pr => (
                                  <option value={pr.id}>{pr.desigP}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                          </select>
                        </div>
                      </div>
                        <div className="col-3">
                        <div className="input-group mb-3">
                          <select className='form-select' onChange={e => setFilterType2(e.target.value)}>
                            <option value="">Filter by Fournisseur</option>
                            {fournisseurs && fournisseurs.length > 0 ? (
                                fournisseurs.map(fr => (
                                  <option value={fr.id}>{fr.fournisseur.nom}-{fr.fournisseur.prenom}</option>
                                ))

                                
                              
                            ) : (<option></option>)}
                           
                          </select>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="input-group mb-3">
                          <select className='form-select' onChange={e => setFilterType2(e.target.value)}>
                            <option value="">Filter by Type</option>
                            <option value="entièrement">Entièrement Paye</option>
                            <option value="partiellement">Partiellement Paye</option>
                           
                          </select>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="input-group mb-3">
                          <select className='form-select' onChange={e => setFilterType2(e.target.value)}>
                            <option value="">Filter by Status</option>
                            <option value="incomplet">Incomplet</option>
                            <option value="complet">Complet</option>
                           
                          </select>
                        </div>
                      </div>
                
                    </div>
                    <div className="row mt-2">
                                  <div className="col-6">
                                  <div className="input-group mb-3">
                                      
                                      <input type="date" class="form-control"  aria-describedby="basic-addon1" placeholder="Start Date" onChange={e => setStartDate(e.target.value)}/>
                                      </div>
                                    
                                  </div>
                                  <div className="col-6">
                                  <div className="input-group mb-3">
                                  
                                  <input type="date" class="form-control" aria-describedby="basic-addon1" placeholder="End Date" onChange={e => setEndDate(e.target.value)}/>
                                  </div>
                               
                                  </div>
                 
                    </div>
                </div>

     
            </div>
            {achats && achats.length > 0 ? (
                <>
                  <Modal
                        isOpen={showDetailAchatModal}
                        onRequestClose={handleCloseModalDetail}
                        
                        contentLabel="Example Modal"
                        style={customStyles}>
                          <DetailAchat closeModalDetail={handleCloseModalDetail} id={idAchat} total={totalAchat} />
                </Modal>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Quantite</th>
                                <th>Prix</th>
                                <th>Date</th>
                                <th>Fournisseur</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(ac => (
                                <tr key={ac.id}>
                                  <td>{ac.prdA.desigP}</td>
                                    <td>{ac.qntA}</td>
                                    
                                    <td>{ac.prixA}</td>
                                    <td>{ac.dateA}</td>
                                    <td>{ac.fournisseurA.fournisseur.nom}-{ac.fournisseurA.fournisseur.prenom}</td>
                                    <td>{ac.typeA === "entièrement" ? "Entièrement" : "Partiellement"}</td>
                                    <td>{ac.typeA === "complet" ? "Complet" : "Incomplet"}</td>
                                    <td>
                                  
                                      <button className="btn btn-primary me-1" onClick={() => editProduct(ac.id)}><i class="bi bi-pencil-square"></i></button>
                                        <button className="btn btn-danger " onClick={() => handleDelete(ac.id)}><i class="bi bi-trash3-fill"></i></button>
                                        {ac.typeA === "partiellement" ? (
                                       <button className="btn btn-warning me-1"  onClick={() => handleOpenModalDetail(ac.id,ac.qntA,ac.prixA)}><i className="bi bi-info-square"></i></button>
                                    ): (<span></span>)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center" style={{"z-indec":"10"}}>
                    <Pagination>
                        {[...Array(totalPages).keys()].map(number => (
                            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                    </div>

                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
