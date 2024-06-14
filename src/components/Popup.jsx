import "./Popup.css";
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Popup extends React.Component {
  state = {
    abierto: false,
  };
  abrirmodal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    return (
      <>
        <div className="principal" id="principal">
          <div className="secundario" id="secundario">
            <Button className="BOTONPOP" onClick={this.abrirmodal}>
              Siguiente →
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} Style={modalStyles}>
          <ModalHeader>Registro Exitoso</ModalHeader>

          <ModalBody>
            Felicidades, ya eres parte de DigitAll Connect
                    
                </ModalBody> 

          <ModalFooter>
            <Button className="BOTONOPCI">Volver al Inicio</Button>
            <Button className="BOTONOPCI">Ver mi Perfil</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Popup;
