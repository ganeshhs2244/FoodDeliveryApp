import { Fragment } from "react";
import mealsImage from '../../assert/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return <Fragment>
        <header className={classes.header}> 
            <h1> React Meals</h1>
            <HeaderCartButton cartVisibility={props.cartVisibility}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meal Image'></img>
        </div>
    </Fragment>

};
export default Header;