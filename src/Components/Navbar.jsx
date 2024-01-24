import React, { useContext, useEffect, useState } from 'react';
import Notification from './Notification';
import ApiContext from '../ApiContext';

export default function Navbar() {
  const { Notifications, getNotifications, markasread } = useContext(ApiContext)
  const [isOpen,setIsOpen] = useState(false)
  
  const handleClickBell = () => {
    markasread()
    if(isOpen)
      setIsOpen(false)
    else
      setIsOpen(true)
  }
  useEffect(() => {
    getNotifications();
}, [Notifications]);
  const hasUnreadNotifications = (notifications) => {
    return notifications.some(notification => notification.status === 0);
  };


const notifications = Notifications ? Notifications.notifications : [];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top" style={{ marginLeft: '95px',"zIndex":"100" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
          hhhhhhhhh 
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Dashboard">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
           
            <li className="nav-item dropdown notification-ui show" onClick={handleClickBell}>
              <a className="nav-link dropdown-toggle notification-ui_icon" href="#">
              <i class="bi bi-bell-fill"></i>
              {hasUnreadNotifications(notifications)? (<span class="unread-notification"></span>) : (<span ></span>)}
              
              </a>
              {isOpen ? (<Notification notifications={notifications}/>) : (<span></span>)}
              
            </li>
            
           
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
