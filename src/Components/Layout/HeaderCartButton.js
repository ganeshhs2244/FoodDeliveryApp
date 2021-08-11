import { Fragment,useContext,useState,useEffect } from "react";
import CartIcon from "../UI/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/cart-context";

const HeaderCartButton=(props)=>{
    const [btnIsHighlighted,setbtnIsHighlighted]=useState(false);
    const context=useContext(CartContext);
    const {items}=context;
   
    useEffect(()=>{
        if(items.amount===0){
            return;
        }
        setbtnIsHighlighted(true);   
    },[items]);
    const numberOfCartItem=context.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;   
    },0)

    const btnclasses=`${classes.button} ${btnIsHighlighted ? classes.bump: ''}`
    return <Fragment>
        <button className={btnclasses} onClick={props.cartVisibility}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span >
                your cart
            </span>
            <span className={classes.badge}> 
            {numberOfCartItem}
            </span>
        </button>
    </Fragment>
};

export default HeaderCartButton;
