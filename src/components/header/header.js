import Logo from './Logo.svg'
import classes from './header.module.scss'
import React from 'react';
function Header (){
    return(<div className={classes.header}>
        <img width={60} src={Logo} className={classes.logo} alt='logo'></img>
    </div>)
}
export default Header