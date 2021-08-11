import { useRef,useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
    const amountInputRef=useRef();
    const [isAmountvalid,setIsAmountValid]=useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length==0 ||enteredAmountNumber<1||enteredAmountNumber>5){
            setIsAmountValid(true);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amout',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}>
        </Input>
        <button>+ Add</button>
        {isAmountvalid && <p>Please enter valid amount in (1-5)</p>}
    </form>
};

export default MealItemForm;