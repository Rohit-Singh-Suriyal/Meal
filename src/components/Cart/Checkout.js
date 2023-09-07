import classes from './Checkout.module.css'
import React,{useRef,useState} from 'react'
const Checkout = (props) => {
    const isempty=value=>value.trim()==='';
    const isnotfivecas=value=>value.trim().length!==5;
    const [formisvalid,setformisvalid]=useState({
       name:true,
       address:true,
       pincode:true,
       city:true,

    })


    const nameref=useRef();
    const addressref=useRef();
    const Pincoderef=useRef();
    const cityref=useRef();
    const submithandler=(event)=>{
        event.preventDefault();
        const enteredname=nameref.current.value;
        const enteredaddress=addressref.current.value;
        const enteredpincode=Pincoderef.current.value;
        const enteredcity=cityref.current.value;

    

        const enterednameisvalid=!isempty(enteredname);
        const enteredaddressisvalid=!isempty(enteredaddress);
        const enteredcityisvalid=!isempty(enteredcity);
       
        const enteredpincodeisvalid=!isnotfivecas(enteredpincode);
        //ye isliye taaki neeche waale div ke liye ise kr sake 
        setformisvalid({
           name:enterednameisvalid,
           address:enteredaddressisvalid,
           pincode:enteredpincodeisvalid,
           city:enteredcityisvalid,

         })   
        const formisvaalid=enterednameisvalid && enteredaddressisvalid && enteredcityisvalid && enteredpincodeisvalid;
        
    
      
       if(!formisvaalid){

         return;
       }
       props.submitorder({
         name:enteredname,
         address:enteredaddress,
         pincode:enteredpincode,
         city:enteredcity,


       })      

       nameref.current.value="";
       addressref.current.value="";
       Pincoderef.current.value="";
       cityref.current.value="";


    }
        const nameclass=`${classes.check} ${formisvalid.name ? '':classes.invalid}`
        const addressclass=`${classes.check} ${formisvalid.address ? '':classes.invalid}`
        const pincodeclass=`${classes.check} ${formisvalid.pincode ? '':classes.invalid}`
        const cityclass=`${classes.check} ${formisvalid.city ? '':classes.invalid}`
    
  
  return (
    <>
      <from onSubmit={submithandler}>
        <div className={nameclass}>
          <label>Name</label>
          <input ref={nameref} type="text"></input>

        </div>
        {!formisvalid.name && <p className={classes.para}>!please eneter the valid name</p>}

        <div className={addressclass}>
          <label>Address</label>
          <input ref={addressref} ype="text"></input>
        </div>
        {!formisvalid.address && <p className={classes.para}>!please eneter the valid address</p>}

        <div className={pincodeclass}>
          <label>Pincode</label>
          <input ref={Pincoderef} type="text"></input>
        </div>
        {!formisvalid.pincode && <p className={classes.para}>!please eneter the valid pincode</p>}

        <div className={cityclass}>
          <label>City</label>
          <input ref={cityref} type="text"></input>
        </div>
        {!formisvalid.city && <p className={classes.para}>!please eneter the valid city</p>}

        <div className={classes.low}>
        <button onClick={props.onclose} type="button">Cancel</button>
        <button onClick={submithandler}>Confirm</button>
        </div>
      </from>
    </>
  );
};
export default Checkout;
