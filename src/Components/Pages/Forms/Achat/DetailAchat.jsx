import React, { useContext, useEffect, useState } from 'react'
import VersementAchat from './VersementAchat'
import ApiContext from '../../../../ApiContext'
import VersementAchatForm from './VersementAchatForm';

function DetailAchat(props) {
    const {fetchDetailAchat, detailAchat} = useContext(ApiContext);
 

    useEffect(() => {
        fetchDetailAchat(props.id);
    },[detailAchat,props.id])
  return (
    <div className='container mt-2 p-5'>
        <div className="alert alert-info">
            <h4>Prix total: {props.total} DA</h4>
        </div>
        {detailAchat ? ( 
                <div className="alert alert-warning">
                    <h4>Reste a payer: {detailAchat.reste} Da</h4>
                </div>
             
         
        ): (<></>)}
        {detailAchat.reste > 0 ? (<VersementAchatForm reste={detailAchat.reste} id={props.id}  />) : (<></>)}

            
       
        <VersementAchat versement={detailAchat.data} />
    </div>
  )
}

export default DetailAchat