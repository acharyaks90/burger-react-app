import  React ,{Component} from 'react';
import  Aux from '../../hoc/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../containers/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE ={
    salad: 0.3,
    bacon:0.7,
    cheese :0.4,
    meat:1.2
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon:0,
            cheese :0,
            meat:0
        },
        totalPrice :4,
        purchasable: false,
        purchasing: true

    }

    updatePurchasable  (ingredients) {


        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0)
        this.setState({purchasable:sum > 0});
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = newCount;
        const priceAddtion = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })

        this.updatePurchasable(updatedIngredients);

    }





    // Method to remove the ingredients @addIngredientHandler of BurgerBuilder

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
            return;
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })

        this.updatePurchasable(updatedIngredients);

    }

    purchaseHandler = () => {
        this.setState({purchasing: false})
    }

    purchasedHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseContinue = () => {
        alert('Yes Continue');

    }

    render(){

        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal show={!this.state.purchasing} modalClosed={this.purchasedHandler}>
                    <OrderSummary
                        purchaseCancelled={this.purchasedHandler}
                        purchaseContinue={this.purchaseContinue}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} ></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>

            </Aux>
        )
    }
}


export default BurgerBuilder;
