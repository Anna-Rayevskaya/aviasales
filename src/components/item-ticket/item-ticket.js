import classes from './item-ticket.module.scss'
import Logo from './S7 Logo.png'
import React from 'react';

function ItemTicket (){
    return(
    <div className={classes.ticket}>
        <div className={classes['price-ticket']}>13 400 P</div>
        <img src={Logo} alt='logo' className={classes['logo-ticket']}/>
        <div className={classes.container}>
            <div>
                <div className={classes.title}>MOW – HKT</div>
                <div className={classes.information}>10:45 – 08:00</div>
            </div>
            <div>
                <div className={classes.title}>В пути</div>
                <div className={classes.information}>21ч 15м</div>
            </div>
            <div>
                <div className={classes.title}>2 пересадки</div>
                <div className={classes.information}>HKG, JNB</div>
            </div>
        </div>
    </div>
    )
}
export default ItemTicket