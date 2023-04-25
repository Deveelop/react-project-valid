import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};
const ModalOverLay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />, document.querySelector('#overlay-root')
      )}
    </>
  );
}
