import React from 'react'
import TrasferForm from './TrasferForm'
import TransferTable from './TransferTable'

function Transfer(props) {
  return (
    <div className='container mt-2 p-5'>
        <TrasferForm  id={props.id}/>
        <TransferTable id={props.id} />
    </div>
  )
}

export default Transfer