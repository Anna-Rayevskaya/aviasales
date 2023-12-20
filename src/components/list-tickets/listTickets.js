
import React from "react";
import ItemTicket from "../item-ticket";
import { useEffect } from "react";
import { fetchId, fetchTicket, sortedTickets} from "../store/slice-ticketReducer";
import { useDispatch, useSelector } from "react-redux";

function ListTickets() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.tickets.id);
  const tickets = useSelector((state) => state.tickets.tickets);
  console.log(tickets);
  const tabActive = useSelector((state) => state.tabs.tabs);
  console.log(tabActive);
  const stop = useSelector((state) => state.tickets.stop);
  console.log(stop);

  useEffect(() => {
    dispatch(fetchId());
  }, []);
  
  useEffect(() => {
    function data (){
      if (id && !stop) {
        dispatch(fetchTicket(id));
        if(stop){
          data()
        }

      } else{
        return
      }
    }
    data ()
  }, [id, stop, dispatch]);
  
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
