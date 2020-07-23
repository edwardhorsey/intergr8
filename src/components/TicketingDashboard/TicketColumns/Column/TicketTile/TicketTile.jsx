import React, { Component } from "react";
import styles from "./Tickettile.module.scss";
import TicketView from "../TicketView/TicketView";
import { firestore } from '../../../../../firebase';


class TicketTile extends Component {
  state = {
    ticketViewOpen: false,
    currentTicket: {},
  };

  closeCurrentTicket = () => {
    let dataClone = { ...this.state.currentTicket };
    dataClone.isOpen = !dataClone.isOpen;
    this.setState({
      currentTicket: dataClone,
    });
    //firebase resolve
    firestore
      .collection('tickets')
      .doc(dataClone.id)
      .update({ isOpen: false })
      .then(console.log(dataClone.id + "is now closed."))
  };

  openTicketModal = (obj) => {
    console.log(obj);
    this.setState({ ticketViewOpen: !this.state.ticketViewOpen, currentTicket: obj });
  };

  closeTicketModal = () => {
    this.setState({ ticketViewOpen: false })
  }

  render() {
    const showModal = this.state.ticketViewOpen ? (
      <TicketView data={this.state.currentTicket} closeTicket={this.closeCurrentTicket}
        closeTicketModal={this.closeTicketModal}
        toggleTicketView={this.state.ticketViewOpen} />
    ) : null;
    return (
      <div>
        {this.props.data.map((obj) => (
          <section key={obj.ID} onClick={() => this.openTicketModal(obj)} className={styles.TicketTile}>
            <div className={styles.TicketContent} >
              <h3>{obj.category}</h3>
              <p>Employee ID:{obj.createdBy.substring(0,10)}</p>
              <p>Ticket ID:{obj.ID.substring(0,10)}</p>
              <p>Date:{obj.createdAtDate}</p>
              <div className={styles.ticketUser}>
                <AssignedUser className={styles.assignUser} ticketID={obj.ID} />
              </div>
            </div>
          </section>
        ))}
        {showModal}
      </div>
    );
  }
}

export default TicketTile;

// Ticket ID:
// {Math.random().toString(36).slice(2).substring(0, 6).toUpperCase()}
