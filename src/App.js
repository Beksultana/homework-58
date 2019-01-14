import React, { Component } from 'react';
import Modal from './components/Modal/Modal.js'
import Alert from "./components/Alert/Alert";

class App extends Component {

    state= {
      showModal: false,
    };

    showModalHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    closeModal = () => {
        this.showModalHandler()
    };

    dismissShow = () => {

    };

  render() {
    return (
      <div className="Container">
          <div className={"ShowModal"}>
              <button onClick={this.showModalHandler} className={'ShowModalBtn'}>Modal show</button>
          </div>


          {this.state.showModal ?
              <div onClick={this.showModalHandler} className={'ModalBlock'}>
                  <Modal>
                    <p><strong>This is modal content</strong></p>
                      <i style={{color: '#424242'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, deserunt?</i>
                      <div className={'CloseBlock'}><button onClick={this.closeModal} className={'ShowModalBtn closeBtn'}>x</button></div>
                  </Modal>
              </div>
              : null
          }

          <Alert
              type={'warning'}
              dismiss={this.someHandler}
          >
              <span>This is a warning type alert</span>
          </Alert>
          <Alert type={'success'}><span>This is a warning type alert</span></Alert>
      </div>
    );
  }
}

export default App;
