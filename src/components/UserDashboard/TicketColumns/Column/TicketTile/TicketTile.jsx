import React, { Component } from "react";
import styles from "./TicketTile.module.scss";
import AssignedUser from '../../../../AssignedUser';

class TicketTile extends Component {

  state = {
    ticketViewOpen: false,
    currentTicket: {},
  };

  render() {
    const { ticket, setCurrentTicket } = this.props;
    return (
      <article className={ticket.isOpen ? styles.normalTicketTile : styles.resolvedTicketTile}>
        <button className={styles.viewTicket} onClick={() => setCurrentTicket(ticket)}>
          <FontAwesomeIcon icon="expand" />
        </button>
        <div className={styles.ticketContent} >
          <h3>{ticket.eventLog[0].content.message}</h3>
        </div>
        <div>
          <span className={styles.boldText}>Query: </span><span >{ticket.eventLog[0].content.message}</span>
        </div>
        <div>
          <span className={styles.boldText}>Ticket ID: </span><span > {ticket.ID.substring(0, 10)}</span>
        </div>
        <div>
          <span className={styles.boldText}>Date: </span><span >{ticket.createdAtDate}</span>
        </div>
        <div>
          <span className={styles.boldText}><p className={styles.green}>{this.showResolvedStatus()}</p></span>
        </div>
        <div className={styles.ticketUser}>
          <AssignedUser ticket={ticket} />
        </div>
      </ article >
    )
  }
}

export default TicketTile;
