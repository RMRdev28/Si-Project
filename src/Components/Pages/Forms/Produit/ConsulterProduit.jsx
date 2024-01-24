import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Modal from 'react-modal';
import Transfer from './Transfer';
import EditProduct from './EditProduct';

export default function ConsulterProduit() {
  const { ProductsC, fetchProductsC,editProduct,deleteProduct } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filterType, setFilterType] = useState('');
  const [productId, setProductId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModalTransfer, setShowModalTransfer] = useState(false);
  const [showModalEditProduct, setShowModalEditProduct] = useState(false);
  const handleOpenModalTransfer = (id) => {setShowModalTransfer(true); setProductId(id)};
  const handleOpenModalEditProduct = (id) => {setShowModalEditProduct(true); setProductId(id)};
  const handleCloseModalTransfer = () => setShowModalTransfer(false);
  const handleCloseModalEditProduct = () => setShowModalEditProduct(false);
  useEffect(() => { 
    fetchProductsC();
  }, [fetchProductsC]);
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

  const produits = ProductsC ? ProductsC.produits : [];
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
          // Handle any errors that occur during the delete operation
          Swal.fire(
            'Failed!',
            'There was a problem deleting your file.',
            'error'
          )
        });
      }
    })
    
  }
  // Filter and Search Logic
  const filteredProducts = filterType ? produits.filter(prod => prod.typeP === filterType) : produits;
  const searchedProducts = searchTerm ? filteredProducts.filter(prod => prod.desigP.toLowerCase().includes(searchTerm.toLowerCase())) : filteredProducts;
  const currentItems = searchedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='container mt-2 p-5'>
             <div className="mt-3">
               
             <div className="alert alert-success">
                    <h4>Produits</h4>
              </div>
              <div className="mb-3 border border-2 p-3">
              <div className="row mt-2 ">
              <div className="col-6">
              <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="Recherche Produit" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setSearchTerm(e.target.value)}/>
              </div>
              </div>  
              <div className="col-6">
          <div className="input-group mb-3">
            <select className='form-select' onChange={e => setFilterType(e.target.value)}>
                <option value="">Filter by Type</option>
                {/* Populate with unique types from your products */}
                <option value="matiere">Matiere</option>
                <option value="produit">Produit</option>
            </select>
          </div>
          </div>
              </div>
              </div>
        
      
            </div>
            {produits && produits.length > 0 ? (
                <>
                <Modal
                        isOpen={showModalTransfer}
                        onRequestClose={handleCloseModalTransfer}
                        
                        contentLabel="Example Modal"
                        style={customStyles}>
                          <Transfer closeModalTransfer={handleCloseModalTransfer} id={productId} />
                </Modal>
                <Modal
                        isOpen={showModalEditProduct}
                        onRequestClose={handleCloseModalEditProduct}
                        
                        contentLabel="Example Modal"
                        style={customStyles}>
                          <EditProduct closeModalTransfer={handleCloseModalEditProduct} id={productId} />
                </Modal>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Designation</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Quantity in Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(prod => (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.desigP}</td>
                                    <td>{prod.descP}</td>
                                    <td>{prod.typeP}</td>
                                    <td>{prod.qntEnStock}</td>
                                    <td>
                                      <button className="btn btn-success me-2" onClick={() => handleOpenModalTransfer(prod.id)}><i class="bi bi-send"></i></button>
                                      <button className="btn btn-primary me-2" onClick={() => handleOpenModalEditProduct(prod.id)}><i class="bi bi-pencil-square"></i></button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(prod.id)}><i class="bi bi-trash3-fill"></i></button>
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
