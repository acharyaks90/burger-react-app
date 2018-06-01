import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    const orderSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span
                style={{textTransform: 'capitalize'}}>{igKey}</span>:<span>{props.ingredients[igKey]}</span></li>
        });
    return (
        <Aux>
            <h3>Your Order </h3>
            <p>A delicious Burger will Following Content</p>
            <ul>
                {orderSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price : {props.price}</strong></p>
            <Button type={'Danger'} clicked={props.purchaseCancelled}> Cancel</Button>
            <Button type={'Success'} clicked={props.purchaseContinue}> Continue</Button>
        </Aux>
    )
}

export default orderSummary;