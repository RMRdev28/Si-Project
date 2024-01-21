import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Dashboard';
import Modal from 'react-modal';


export const Centre1 = (props) => {
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
  return (
    <div>
    <Modal
        isOpen={props.showModalVente}
        onRequestClose={props.handleCloseModalVente}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterVenteForm  closeModalAchat={handleCloseModalVente}/>
        </Modal>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Dashboard/>} />
        {/* Define other nested routes here if needed */}
      </Routes>
    </div>
  );
};
export const Centre2 = () => {
    return (
      <div>
            <Modal
     isOpen={props.showModalVente}
     onRequestClose={props.handleCloseModalVente}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterVenteForm  closeModalAchat={handleCloseModalVente}/>
        </Modal>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          {/* Define other nested routes here if needed */}
        </Routes>
      </div>
    );
  };

export const Centre3 = () => {
    return (
      <div>
        <Modal
     isOpen={props.showModalVente}
     onRequestClose={props.handleCloseModalVente}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <AjouterVenteForm  closeModalAchat={handleCloseModalVente}/>
        </Modal>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          {/* Define other nested routes here if needed */}
        </Routes>
      </div>
    );
  };

