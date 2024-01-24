import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../../../ApiContext';
import { Table, Pagination } from 'react-bootstrap';
import UserInformation from './UserInformation';
import EmployeMsrouf from './EmployeMsrouf';


export default function DetailUser(props) {
  const {fetchUserInfo, User } = useContext(ApiContext);


  useEffect(() => {
    fetchUserInfo(props.idUser);
  }, [fetchUserInfo]);
    return (<>
      {User ? (
        <UserInformation user={User} />
      ) : (<></>)}
      {props.type==="employe" ? (
        <>
        <EmployeMsrouf id={props.idUser} />
        </>
      ) : (<></>)

      }
        
    </>
    );
}
