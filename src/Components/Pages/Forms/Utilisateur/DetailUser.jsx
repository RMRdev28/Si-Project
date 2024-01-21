import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import Modal from 'react-modal';
import Swal from 'sweetalert2'

export default function DetailUser(props) {
  const { User, fetchUserInfo} = useContext(ApiContext);
  const path = location.pathname;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterType1, setFilterType1] = useState('');

  useEffect(() => {
    fetchUserInfo(props.idUser)
  }, [fetchUserInfo, props.idUser]);
  console.log(props.idUser)
  
  
      




    return (
      
        <div className='containre mt-2 p-5'> 
             <div className="mt-3">
                
                  <div className="alert alert-success">
                    <h4>{User.client.nom} {props.idUser}</h4>
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
                    
                                     
                    </div>
   
        
                </div>

     
            </div>
            
        </div>
    );
}
