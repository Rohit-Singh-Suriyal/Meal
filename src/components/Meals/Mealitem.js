import Mealform from "./Mealform";
import classes from "./Mealitem.module.css";
import Cartcontext from "../Store/Cartcontext"
import { useContext } from "react";
const Mealitem = (props) => {
  const ctx=useContext(Cartcontext)
  console.log(props.price)
  const price = props.price
  const onaddcart = (amount) => {
  
    ctx.addhandler({
     id:props.id,
     name:props.name,
     amount:amount,
     price:props.price


    });
  };

  return (
    <>
      <li className={classes.listcontainer}>
        <section>
          <h3 className={classes.heading}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>${price}</div>
        </section>

        <div>
          <Mealform onaddcart={onaddcart}/>
        </div>
      </li>
    </>
  );
};
export default Mealitem;
