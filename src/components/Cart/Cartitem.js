import classes from "./Cartitem.module.css";
const Cartitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <div className={classes.container}>
        <h1>{props.name}</h1>
        <div className={classes.butttoncontainer}>
          <button onClick={props.onremove} className={classes.newb}>
            -
          </button>
          <button onClick={props.onadd} className={classes.newb}>
            +
          </button>
        </div>
        <div>
          <div className={classes.box}>
            <div className={classes.price}>{price}</div>
            <div className={classes.amount}>x{props.amount}</div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default Cartitem;
