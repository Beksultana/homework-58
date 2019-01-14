import React, { Component } from 'react';
import Modal from './components/Modal/Modal.js'

class App extends Component {

    state= {
      showModal: false
    };

    showModalHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    closeModal = () => {
        this.showModalHandler()
    };

  render() {
    return (
      <div className="Container">
          <div className={"ShowModal"}>
              <button onClick={this.showModalHandler} className={'ShowModalBtn'}>Modal show</button>
          </div>

          {this.state.showModal ?
                  <Modal>
                    <p><strong>This is modal content</strong></p>
                      <i style={{color: '#424242'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, deserunt?</i>
                      <div className={'CloseBlock'}><button onClick={this.closeModal} className={'ShowModalBtn close'}>x</button></div>
                  </Modal>
              : null
          }

      </div>
    );
  }
}

export default App;
