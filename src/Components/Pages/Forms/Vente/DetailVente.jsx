import React, { useContext, useEffect, useState } from 'react'
import VersementVenteForm from './VersementVenteForm'
import VersementVente from './VersementVente'
import ApiContext from '../../../../ApiContext'


function DetailVente(props) {
  const {fetchDetailVente, detailVente} = useContext(ApiContext);
  useEffect(() => {
    fetchDetailVente(props.id);
},[detailVente,props.id]);

  return (
    <div className='container mt-2 p-5'>
        <div className="alert alert-info">
            <h4>Prix total: {props.total} DA</h4>
        </div>
        {detailVente ? ( 
                <div className="alert alert-warning">
                    <h4>Reste a payer: {detailVente.reste} Da</h4>
                </div>
             
         
        ): (<></>)}
        {detailVente.reste > 0 ? (<VersementVenteForm reste={detailVente.reste} id={props.id}  />) : (<></>)}

            
       
        <VersementVente versement={detailVente.data} />
    </div>
  )
}

export default DetailVente