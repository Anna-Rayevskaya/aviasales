
import React from "react";
import ItemTicket from "../item-ticket";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchId, fetchTicket} from "../store/slice-ticketReducer";
import { useDispatch } from "react-redux";

function ListTickets() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.tickets.id);
  console.log(id);

  useEffect(() => {
    dispatch(fetchId());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchTicket(id));
    }
  }, [id, dispatch]);

  function generateRandomId() {
    return Math.random().toString(36).substring(2);
  }

  const tickets = useSelector((state) => state.tickets.tickets);
  console.log(tickets);



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
  // return(
  //   <div>
  //     <ItemTicket/>
  //   </div>
  // )
}

export default ListTickets;
