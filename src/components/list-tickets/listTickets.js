import React from "react";
import ItemTicket from "../item-ticket";
import { useEffect } from "react";
import { fetchId, fetchTicket, sortedTickets} from "../store/slice-ticketReducer";
import { useDispatch, useSelector } from "react-redux";

function ListTickets() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.tickets.id);
  const tickets = useSelector((state) => state.tickets.tickets);
  console.log(tickets)
  const tabActive = useSelector((state) => state.tabs.tabs);
  const stop = useSelector((state) => state.tickets.stop);
  const rec = useSelector((state) => state.tickets.rec);

  useEffect(() => {
    dispatch(fetchId());
  }, []);

  useEffect(() => {
    if(id && !stop){
      dispatch(fetchTicket(id));
    }
  }, [ id, rec]);
  
  // useEffect(() => {
  //   if(id && !stop){
  //     dispatch(fetchTicket(id))
  //   }
  // }, [rec]);

  
  useEffect(() => {
      dispatch(sortedTickets(tabActive));
  }, [ tabActive]);

  function generateRandomId() {
    return Math.random().toString(36).substring(2);
  }

  return (
    <div>
      {tickets.map((ticket) => (
        <ItemTicket
          key={generateRandomId()}
          carrier={ticket.carrier}
          price={ticket.price}
          segments={ticket.segments}
        />
      ))}
    </div>
  );
}

export default ListTickets;
