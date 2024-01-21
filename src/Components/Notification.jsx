import React from 'react'
import '../notification.css'
function Notification({notifications}) {
  return (
    <div className="dropdown-menu notification-ui_dd show ms-5" aria-labelledby="navbarDropdown">
    <div className="notification-ui_dd-header">
        <h3 className="text-center">Notifications</h3>
    </div>
    <div className="notification-ui_dd-content">
        {notifications.map(notif => (
                        <div className="notification-list notification-list--unread">

                        <div className="notification-list_detail">
                            <p className='text-danger'> <b>Produit: {notif.prd.desigP}</b> est presque épuisé,  il ne reste plus que <b>{notif.prd.qntEnStock}</b> pièces.</p>
                        </div>
            
                    </div>
        ))}

    
    </div>
</div>
  )
}

export default Notification