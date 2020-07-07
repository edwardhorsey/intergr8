import React, { Component } from 'react';
import styles from './TicketView.module.scss';
import olly from './olly.jpg';
import Message from './Message';
import Button from '../Button'
import ResolveTicketModal from './ResolveTicketModal';

class TicketView extends Component {
    constructor() {
        super();
        this.creationDate = new Date();
    }
    // Three priority levels: 1,2,3.

    state = {
        priority: 1,
        manualOverRide: false,
        isDisplayResolve: false,
    }

    toggleResolveModal = () => {
        this.setState({ isDisplayResolve: !this.state.isDisplayResolve })
    }

    componentDidMount() {
        return this.setState({
            priority: 3,
            manualOverRide: false,
        });
    }

    hoursFromCreation = () => {
        const today = new Date();
        const milliseconds = Math.abs(today - this.creationDate);
        const hours = milliseconds / 36e5;
        return hours;
        //  return 36;
    }

    automaticUpdateState = () => {
        if (!this.state.manualOverRide) {
            if (this.hoursFromCreation() > 48 && this.state.priority !== 3) {
                this.setState({ priority: 3, })
            } else if (this.hoursFromCreation() > 24 && this.state.priority !== 2) {
                this.setState({ priority: 2, })
            }
        }
    }

    manualUpdateState = (newPriority) => {
        // if (this.state.manualOverRide){
        this.setState(
            {
                priority: newPriority,
                manualOverRide: true,
            }
        )
        // }
    }

    setColour = () => {
        if (this.state.priority === 3) {
            return styles.red
        } else if (this.state.priority === 2) {
            return styles.amber
        } else {
            return styles.green
        }
    }

    render() {
        const displayResolve = this.state.isDisplayResolve ? (<ResolveTicketModal />) : null;
        this.automaticUpdateState()

        return (
            <>
                <article>
                    <section className={styles.ticketTop}>
                        <div className={styles.ticketHeader}>
                            <h2>Title</h2>
                            <h3>Category</h3>
                            <h3>Assigned User</h3>
                        </div>
                        <div className={styles.ticketId}>
                            <p>Ticket ID</p>
                            <div className={`${styles.circle} ${this.setColour()}`}></div>
                        </div>
                        {/* <div className={styles.resolveBtn}>
                        <Button text={"Resolve Ticket"}/>
                </div> */}
                        <button className={styles.resolveBtn} onClick={this.toggleResolveModal}>Resolve Ticket</button>
                    </section>

                    <div className={styles.messageContainer}>

                        <Message userType={"Employee"} />
                        <Message userType={"HR"} />
                        <Message userType={"Employee"} />
                        <Message userType={"HR"} />

                        <section className={styles.writingMessage}>
                            <div className={styles.messageContent}>
                                <textarea />
                                <Button text={"Send"} />
                            </div>
                        </section>
                    </div>
                </article>
                {displayResolve}
            </>
        )
    }

}

export default TicketView;