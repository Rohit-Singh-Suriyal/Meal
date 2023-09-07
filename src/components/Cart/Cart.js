import Model from "../UI/Model";
import React, { useContext,useState } from "react";
import classes from "./Cart.module.css";
import Cartcontext from "../Store/Cartcontext";
import Cartitem from "./Cartitem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isshown,setisshown]=useState(false)
  const [issubmitting,setissubmitting]=useState(false);
  const[didsubmit,setdidsubmit]=useState(false);
  const ctx = useContext(Cartcontext);
  const amount = ` $ ${ctx.TotalAmount.toFixed(2)}`;
  const itemremovehandler = (id) => {
    ctx.removehandler(id);
  };
  const itemaddhandler = (item) => {
    ctx.addhandler(item);
  };
  const carthandler=(event)=>{
    event.preventDefault();
    setisshown(true);




  }

  const submitorder=async(userdata)=>{
      setissubmitting(true);
      await fetch("https://rohit-s-project-default-rtdb.firebaseio.com/orders.json",{
          method:"POST",
          body:JSON.stringify({
             user:userdata,
             ordereditems:ctx.items   
      })

        })
        setissubmitting(false);
        setdidsubmit(true);
        ctx.clearcart();
  }
const issubmittingcartmodel=<React.Fragment>
  <div className={classes.name}>
          <ul>
            {ctx.items.map((item) => (
              <Cartitem
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onremove={itemremovehandler.bind(null, item.id)}
                onadd={itemaddhandler.bind(null, item)}
              />
            ))}
          </ul>
        </div>

        {isshown && <Checkout submitorder={submitorder} onclose={props.hidecarthandler}/>}
        
        <div className={classes.box}>
          <div className={classes.total}>TotalAmount</div>
          <div className={classes.total}>{amount}</div>
        </div>
       {!isshown &&
       <div className={classes.footer}>
          <button onClick={props.hidecarthandler} className={classes.btn}>
            Close
          </button>
          <button onClick={carthandler} className={classes.btn}>Order</button>
        </div>
}
</React.Fragment>
const issubmittingcontent=<p>data is fetching....</p>
const didsubmitcontent=<React.Fragment>
    <p>you have succefully submitted your data</p>
    <div className={classes.didsubmitbutton}>
    <button onClick={props.hidecarthandler} className={classes.btn}>
            Close
          </button>
    </div>
</React.Fragment>
  return (
    <>
      <Model onClick={props.hidecarthandler}>
        {!issubmitting && !didsubmit && issubmittingcartmodel}
        {issubmitting  && !didsubmit && issubmittingcontent}
        {didsubmit && didsubmitcontent}
      </Model>
    </>
  );
};
export default Cart;
