import React, { Component } from 'react';
import TicketColumns from './TicketColumns/TicketColumns';
import styles from './UserDashboard.module.scss';
import NavBar from '../NavBar';
import { firestore } from '../../firebase';

class userDashboard extends Component {
  state = {
    allTickets: [],
    user: 'S00000001', //this.context.user
  };

  componentDidMount() {
    firestore
      .collection('tickets')
      .where("createdBy", "==", this.props.user.uid)
      .get()
      .then((querySnapshot) => {
        this.setState({allTickets: querySnapshot.docs.map(doc => doc.data())})
      })      
      .catch(err => console.log(err))
  }
  render() {
    const { allTickets } = this.state;
    return (
      <section className={styles.userDashboard}>
        <NavBar user={this.props.user} signOut={this.props.signOut} />
        <TicketColumns allTickets={allTickets}/>
      </section>
    );
  }
}

export default userDashboard;
