import classes from './item-ticket.module.scss'
import Logo from './S7 Logo.png'
import React from 'react';
import PropTypes from 'prop-types';

function ItemTicket ({carrier, price, segments}){
    return(
    <div className={classes.ticket}>
        <div className={classes['price-ticket']}>{price} P</div>
        <img src={Logo} alt={carrier} className={classes['logo-ticket']}/>
        <div className={classes.container}>
            <div>
                <div className={classes.title}>{`${segments[0].origin}-${segments[0].destination}`}</div>
                <div className={classes.information}>{segments[0].date}</div>
            </div>
            <div>
                <div className={classes.title}>В пути</div>
                <div className={classes.information}>{segments[0].duration}</div>
            </div>
            <div>
                <div className={classes.title}>2 пересадки</div>
                <div className={classes.information}>{segments[0].stops}</div>
            </div>
        </div>
    </div>
    )
}

ItemTicket.propTypes = {
    carrier: PropTypes.string,
    price: PropTypes.number,
    segments: PropTypes.array,
  };
  
export default ItemTicket