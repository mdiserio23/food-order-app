import ReactDOM from "react-dom";
import Backdrop from './Backdrop';
import ModalContent from './ModalContent';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-view")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          title="Cart list"
          onCloseModal={props.onCloseModal}
          onOrder={props.onOrder}
        >
          {props.children}
        </ModalContent>,
        document.getElementById("modal-view")
      )}
    </>
  );
};

export default Modal;
