import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Cartprovider from './components/Store/Cartprovider';

const App = () => {
  
  const [cartisshown,setcartisshown]=useState(false);
  const showcarthandler=()=>{
    
    setcartisshown(true);
  }
  const hidecarthandler=()=>{
    console.log("rohit")
    setcartisshown(false);
    
  }
  console.log(cartisshown)
  return (
    <>
    <Cartprovider>
    {cartisshown && <Cart hidecarthandler={hidecarthandler}/>}
    <Header showcarthandler={showcarthandler}/>
    <main>
       <Meals/>

    </main>
    </Cartprovider>
    </>
  );
};

export default App;
