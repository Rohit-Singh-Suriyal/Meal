import Input from '../UI/Input';
import React,{useRef, useState} from 'react'
import classes from './Mealform.module.css'
const Mealform = (props) => {
  const[amountisvalid,setamountisvalid]=useState(true);
  const amountinputreft=useRef();

  
  
  const submithandler=(event)=>{
    event.preventDefault();
    const enteredamount=amountinputreft.current.value;
    const number= +enteredamount;
    
   
    
    if(enteredamount.trim().lenght===0||number<1||number>5){
      setamountisvalid(false)
      return;
    }
    props.onaddcart(number)
        



  }

  return (
    <>
      <form onSubmit={submithandler}>
      <div  className={classes.form}>
        
        <Input ref={amountinputreft} label="Amount" input={{
           type:"number",
           step:'1',
           min:'0',
           max:'5',
           defaultValue:'1'
        }}
       
        
        
        />






    </div>
    <div className={classes.buttoncontainer}>
    <button type="submit">+Add</button>
    {!amountisvalid && <p>please enter a valid amount</p>}
    </div>




      </form>
    </>
  );
};
export default Mealform;
