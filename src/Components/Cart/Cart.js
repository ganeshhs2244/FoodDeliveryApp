import { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {
    const cartCnxt = useContext(CartContext);

    const hasItem = cartCnxt.items.length > 0;
    const totalAmount = `$${cartCnxt.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler=id=>{ 
        cartCnxt.removeItem(id);
    };
    const cartItemAddHandler=item=>{
        cartCnxt.addItem({...item,amount:1});
    };
    const cartItem = (<ul className={classes['cart-items']}>
        {cartCnxt.items.map(meal =>
            <CartItem key={meal.id}
                name={meal.name}
                amount={meal.amount}
                price={meal.price}
                onRemove={cartItemRemoveHandler.bind(null,meal.id)}
                onAdd={cartItemAddHandler.bind(null,meal)}
                >
            </CartItem>)}
    </ul>);


    return <Modal cartVisibility={props.cartVisibility}>
        {cartItem}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.cartVisibility}>close</button>
            {hasItem && <button className={classes.button}>order</button>}
        </div>
    </Modal>
};

export default Cart;