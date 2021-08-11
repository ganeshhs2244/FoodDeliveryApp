import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemform';
import CartContext from '../../../Store/cart-context';

const MealItem=(props)=>{
    const cartcnxt=useContext(CartContext);
    const addToCartHandler=(amount)=>{
        cartcnxt.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    return <li className={classes.meal} >
        <div > 
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
        </div>
    </li>
};
export default MealItem;