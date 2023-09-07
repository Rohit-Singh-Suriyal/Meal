import React, { useReducer } from "react";
import Cartcontext from "./Cartcontext";
const cartreducer = (state, action) => {
  if (action.type === "add"){
    const updatetotalamount =
    state.TotalAmount + action.item.price * action.item.amount;
    console.log(updatetotalamount)
    let updateitems;
    const existingcartitemindex=state.items.findIndex(
      (item) => item.id === action.item.id
      
    );


    
    
    const existingcartitem = state.items[existingcartitemindex];
    
    if (existingcartitem) {
      const newitem = {
        ...existingcartitem,
        amount: existingcartitem.amount + action.item.amount,
        
      };
      updateitems = [...state.items];
      updateitems[existingcartitemindex] = newitem;
      console.log(updateitems);
    }
    else{
      updateitems=state.items.concat(action.item)
      console.log(updateitems);
    }

  return{
    
    items:updateitems,
    TotalAmount:updatetotalamount
    
  }
}
if(action.type==="remove"){
  console.log("rohit");
  const existingcartitemindex=state.items.findIndex(
   (item)=>item.id===action.id


  )
  const existingcartitem=state.items[existingcartitemindex];
  const updatetotalamount=state.TotalAmount-existingcartitem.price;
   let updateitems;
   if(existingcartitem.amount===1){
     updateitems=state.items.filter((item)=>
     item.id!==action.id
     )


   }
   else{
     
  const updateitem={...existingcartitem,amount:existingcartitem.amount-1};
  updateitems=[...state.items]
  updateitems[existingcartitemindex]=updateitem;


   }

return{
  items:updateitems,
  TotalAmount:updatetotalamount
}   





}  
if(action.type==="Clear"){
  return defaultcartstate;
}


}


const defaultcartstate = {
  items: [],
  TotalAmount:0
};


//yahns se main funtion hai
const Cartprovider = (props) => {
  const [cartstate, dispatchcartstate] = useReducer(
    cartreducer,
    defaultcartstate
  );
  const addhandler = (item) => {
    dispatchcartstate({ type: "add", item: item });
  };
  const removehandler=(id)=>{
    dispatchcartstate({type:"remove", id:id})
  }

  const clearcarthandler=()=>{
    dispatchcartstate({type:"Clear"})
  }

  const cartcontext = {
    items: cartstate.items,
    TotalAmount: cartstate.TotalAmount,
    addhandler: addhandler,
    removehandler: removehandler,
    clearcart:clearcarthandler
  };

  return (
  <Cartcontext.Provider value={cartcontext}>
    {props.children}
  </Cartcontext.Provider>
  
  );
};
export default Cartprovider;
