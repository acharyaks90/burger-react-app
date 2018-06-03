import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span
                    style={{textTransform: 'capitalize'}}>{igKey}</span>:<span>{this.props.ingredients[igKey]}</span>
                </li>
            });
        return (
            <Aux>
                <h3>Your Order </h3>
                <p>A delicious Burger will Following Content</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>Total Price : {this.props.price}</strong></p>
                <Button type={'Danger'} clicked={this.props.purchaseCancelled}> Cancel</Button>
                <Button type={'Success'} clicked={this.props.purchaseContinue}> Continue</Button>
            </Aux>
        )
    }

}

export default OrderSummary;