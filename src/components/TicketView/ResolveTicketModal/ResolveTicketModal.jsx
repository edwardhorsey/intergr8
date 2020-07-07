import React, { Component } from 'react';
import styles from './ResolveTicketModal.module.scss'

class ResolveTicketModal extends Component {
  state = { open: false }
  render() {
    return (
      <>
        <div className={styles.ResolveModal}>
          <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
          <form class="modal-content" action="/action_page.php">
            <div class="container">
              <h1>Delete Account</h1>
              <p>Are you sure you want to delete your account?</p>

              <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="button" class="deletebtn">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ResolveTicketModal;