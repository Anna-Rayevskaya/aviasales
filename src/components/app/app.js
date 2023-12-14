import React from 'react';
import classes from './app.module.scss'
import Filter from '../filter'
import ItemTicket from '../item-ticket'
import Tabs from '../tabs'
import Header from '../header/header'


function App (){
    return(<div>
        <Header/>
        <section className={classes.content}>
        <Filter/>
        <div>
        <Tabs/>
        <ItemTicket/>
        <ItemTicket/>
        <ItemTicket/>
        <ItemTicket/>
        <ItemTicket/>
        </div>
        </section>
    </div>)
}
export default App