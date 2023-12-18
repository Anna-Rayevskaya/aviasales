// import classes from "./listTickets.module.scss";
import React from "react";
import ItemTicket from "../item-ticket";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchId, getTickets } from '../store/slice-ticketReducer'
// import { addTickets } from "../store/slice-ticketReducer";
import { useDispatch } from "react-redux";

function ListTickets() {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = fetchId()
      dispatch(id);
      dispatch(getTickets);

    }, [dispatch]);

    const id = useSelector((state) => state.tickets.id);
    console.log(id);
  
//     const ticket = getTickets(id)
//     addTickets(ticket)

//   const tickets = useSelector((state) => state.tickets.tickets);
//   console.log(tickets);

//   return (
//     <div className={classes.ticket}>
//       {tickets.map((ticket) => (
//         <ItemTicket key={tickets.searchId} {...ticket} />
//       ))}
//     </div>
//   );
return (
            <ItemTicket />
      );
}

export default ListTickets;
