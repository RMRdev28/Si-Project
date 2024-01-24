import React,{useState} from 'react'
import { Table, Pagination } from 'react-bootstrap';
function VersementAchat(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const versement = props.versement ? props.versement : [];
    const currentItems = versement.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(versement.length / itemsPerPage);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    {versement && versement.length > 0 ? (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Montant</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(ac => (
                        <tr key={ac.id}>
                          <td>{ac.montantVer}</td>
                            <td>{ac.dateVer}</td> 
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
    </>
  )
  
}

export default VersementAchat