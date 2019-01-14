import React, { Component } from 'react';
import Modal from './components/Modal/Modal.js'

class App extends Component {
  render() {
    return (
      <div className="Container">
          <Modal>
            <h1>Some kinda modal title</h1>
              <p><strong>This is modal content</strong></p>
          </Modal>
      </div>
    );
  }
}

export default App;
