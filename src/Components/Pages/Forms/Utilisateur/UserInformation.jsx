import React from 'react'

function UserInformation(props) {
   
  return (
    <>
    <div className='alert alert-info'>
        {props.user.data.client ? (<span>{props.user.data.client.nom}-{props.user.data.client.prenom}</span>) : (<></>)} 
        {props.user.data.fournisseur ? (<span>{props.user.data.fournisseur.nom}-{props.user.data.fournisseur.prenom}</span>) : (<></>)} 
        {props.user.data.employe ? (<span>{props.user.data.employe.nom}-{props.user.data.employe.prenom}</span>) : (<></>)} 
    </div>
    <div className="alert alert-warning">
        {props.user.data.client ? (<span>Credit: {props.user.data.credit} DA</span>) : <span></span>}
        {props.user.data.fournisseur ? (<span>Solde: {props.user.data.solde} DA</span>) : <span></span>}
        {props.user.data.employe ? (<span>Sallaire Journalier:{props.user.data.sallaire} DA</span>) : <span></span>}
    </div>
    </>
    
  )
}

export default UserInformation