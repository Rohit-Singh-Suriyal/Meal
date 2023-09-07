import CartIcon from "../Cart/Carticon";
import React,{useState} from 'react'
import classes from "./Headercarbutton.module.css";
import image from '../Cart/1.jpg'
import Cartcontext from "../Store/Cartcontext";
import { useContext,useEffect } from "react";
const Headercartbutton = (props) => {
  const[highlight,sethighlight]=useState(false);
  const ctx=useContext(Cartcontext)
  const{items}=ctx;

  const btnclass=`${classes.box} ${highlight ? classes.bump:' '}`
  useEffect(()=>{
    if(items.length===0){
        return;
    }

  sethighlight(true);

  const timer=setTimeout(()=>{

   sethighlight(false);

  },300)
return()=>{
    clearTimeout(timer);
}

},[items]


)
  const totalitem=items.reduce(
    (curNumber,item)=>{
         return curNumber +item.amount;

    },0)

    
  
  return (
    <>
       <div  onClick={props.onClick} className={classes.box}>
       <button className={`${classes.btn} ${highlight ? classes.bump:' '}`} onClick={props.onClick}>
        
          <img src={image} alt="Error"/>
        <div className={classes.text}>Your cart</div>  
        <div className={classes.badge}> {totalitem}</div>
      </button>
      </div>
    </>
  );
};
export default Headercartbutton;
