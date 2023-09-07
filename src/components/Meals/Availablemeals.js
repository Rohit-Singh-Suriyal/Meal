import classes from "./Availablemeal.module.css";
import Mealitem from "./Mealitem";
import Card from "../UI/Card";
import { useEffect,useState } from "react";

const Availablemeals = () => {
  const [meals, setmeals] = useState([]);
  const[isloading,setisloading]=useState(true);
  const [httperror,sethttperror]=useState(null);
  useEffect(() => {
    const fetchmeals = async () => {
      
      const response = await fetch(
        "https://rohit-s-project-default-rtdb.firebaseio.com/Meals.json"
      );
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      const data = await response.json();
       console.log(data);
      const loadmeals = [];
      for (const key in data) {
        loadmeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      console.log(loadmeals)
      setmeals(loadmeals);
       setisloading(false);
    }
    
    fetchmeals().catch(error=>{
      setisloading(false);
      sethttperror(error.message);
    })
   
  }, []);
  if(httperror){
    
     return(
        <section className={classes.errormessage}>
          <p>Http error has occured</p>

        </section>



     )


  }
  if(isloading){
    return <section className={classes.isloading}>
     <p>Isloading.....</p>
     </section>
  }

    
  const meallist = meals.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      amount={meal.amount}
    />
  ));

  return (
    <Card className={classes.bigbox}>
      <ul>{meallist}</ul>
    </Card>
  );
};
export default Availablemeals;
