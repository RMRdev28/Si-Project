import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import DetailUser from './DetailUser'

export default function ConsulterUtilisateur() {
  const { Users, fetchUsers} = useContext(ApiContext);
  const [isOpenDetail,setIsOpenDetail] = useState(false);
  const [idUser,setIdUser] = useState('');
  const handleCloseModalDetail = () => setIsOpenDetail(false);
  const handleOpenModalDetail = (id) => {setIsOpenDetail(true); setIdUser(id)}
  const path = location.pathname;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterType1, setFilterType1] = useState('');
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
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);
  const users = Users ? Users.utilisateurs : [];
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
        deleteProduct(id).then(() => {
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

  const filteredAchats = filterType1 ? users.filter(u => u.typeUtilisateur === filterType1) : users;

  const currentItems = filteredAchats.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredAchats.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (

        <div className='containre mt-2 p-5'> 
                                  <Modal
                                        isOpen={isOpenDetail}
                                        onRequestClose={handleCloseModalDetail}
                                        contentLabel="Example Modal"
                                        style={customStyles}
                                      >
                                        <DetailUser idUser={idUser}  closeModalDetail={handleCloseModalDetail}/>
                                        </Modal>
             <div className="mt-3">
                
                  <div className="alert alert-success">
                    <h4>Utilisateurs</h4>
                  </div>
                  <div className=" mb-3 border border-2 p-3">
                      <div className="row mt-2 "> 
                      <div className="col-6">
                        <div className="input-group mb-3">
                          <select className='form-select' onChange={e => setFilterType1(e.target.value)}>
                            <option value="">Filter by Type</option>
                            <option value="client">Client</option>
                            <option value="fournisseur">Fournisseur</option>
                            <option value="employe">Employe</option>

                          </select>
                        </div>
                      </div>
                      {filterType1 === "employe" ? (
                                                <div className="col-6">
                                                <div className="input-group mb-3">
                                                  <select className='form-select' onChange={e => setFilterType2(e.target.value)}>
                                                    <option value="">Filter by Center</option>
                                                    <option value="1">Center 1</option>
                                                    <option value="2">Center 2</option>
                                                    <option value="3">Center 3</option>
                                 
                                                   
                                                  </select>
                                                </div>
                                              </div>
                      ) : (<span></span>)} 
                                       <div className="col-6">
                                  <div className="input-group mb-3">
                                      
                                      <input type="text" class="form-control"  aria-describedby="basic-addon1" placeholder="Nom" onChange={e => setStartDate(e.target.value)}/>
                                      </div>
                                    
                                  </div>               
                    </div>
   
        
                </div>

     
            </div>
            {users && users.length > 0 ? (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Adresse</th>
                                <th>Ville</th>
                                <th>Type</th>                                
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(u => (
                                <tr key={u.id}>
                                  <td>{u.nom}</td>
                                    <td>{u.prenom}</td>
                                    
                                    <td>{u.adresse}</td>
                                    <td>{u.ville}</td>
                                    
                            
                                    <td>{u.typeUtilisateur}</td>
                                  
                                    <td>
                                    <button className="btn btn-warning me-1"  onClick={()=> handleOpenModalDetail(u.id)}><i className="bi bi-info-square"></i></button>
                                      <button className="btn btn-primary me-1" onClick={() => editProduct(u.id)}><i class="bi bi-pencil-square"></i></button>
                                        <button className="btn btn-danger me-1" onClick={() => handleDelete(u.id)}><i class="bi bi-trash3-fill"></i></button>
                                   
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
