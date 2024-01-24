import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import MasroufForm from './MasroufForm';
function EmployeMsrouf(props) {
    const {fetchMasAbs, MasAbs } = useContext(ApiContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    useEffect(() => {
        fetchMasAbs(props.id)
    },[fetchMasAbs]);
    const mas = MasAbs ? MasAbs.data : [];
    const currentItems = mas.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(mas.length / itemsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
        <MasroufForm id={props.id}/>
                   {mas && mas.length > 0 ? (
                <>
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Masrouf/Abssence</th>
                                <th>Montant</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(u => (
                                <tr key={u.id}>
                                  <td>{u.typeMA}</td>
                                    <td>{u.montantMA}</td>
                                    
                                    <td>{u.dateMA}</td>
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
  )
}

export default EmployeMsrouf