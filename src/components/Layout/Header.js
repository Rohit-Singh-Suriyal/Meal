import classes from "./Header.module.css";
import Headercartbutton from "./Headercartbutton";
import img from '../Assets/meals.jpg'
const Header = (props) => {
    return (
    <>
      <div className={classes.container}>
        <h1>ReactMeals</h1>
       
      </div>
      <Headercartbutton onClick={props.showcarthandler}/>

      <div className={classes.image}>
        <img src={img} alt="Error"/>

      </div>
    </>
  );
};
export default Header;
