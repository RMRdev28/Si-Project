import React, { useContext, useEffect, useState } from 'react'
import { Table, Pagination } from 'react-bootstrap';
import ApiContext from '../../../../ApiContext';
function TransferTable(props) {
    const {fetchTransfert, Transfert} = useContext(ApiContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
      fetchTransfert(props.id);
    },[fetchTransfert]);
    const transferts = Transfert ? Transfert.transfert : []; 
    const currentItems = transferts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(transferts.length / itemsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    
    <div>
        {transferts && transferts.length > 0 ? 
        (
          <>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Designation</th>
                <th>Qnt</th>
                <th>Prix Transfert</th>
                <th>Centre</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {currentItems.map(prod => (
                <tr key={prod.id}>
                    <td>{prod.prdT.desigP}</td>
                    <td>{prod.qntT}</td>
                    <td>{prod.totalT}</td>
                    <td>{prod.centreT.desigC}</td>
                    <td>{prod.dateT}</td>
                </tr>
            ))}
        </tbody>
        </Table>
          <div className="d-flex justify-content-center" style={{"z-index":"10"}}>
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

export default TransferTable