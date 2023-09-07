import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const Modeloverlay = (props) => {
  return (
    <div>
      <div className={classes.Modeloverlay}>{props.children}</div>
    </div>
  );
};
const portal = document.getElementById("overlays");
const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portal)}
      {ReactDOM.createPortal(
        <Modeloverlay>{props.children}</Modeloverlay>,
        portal
      )}
    </>
  );
};
export default Model;
