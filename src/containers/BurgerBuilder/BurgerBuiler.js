import React, { Component } from 'react';
import classes from './BurgerBuilder.module.css';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import CostTracker from '../../components/CostTracker/CostTracker';

// Ingredient Prices
const INGREDIENT_PRICES = {
  salad: 4,
  bacon: 2.5,
  cheese: 5,
  meat: 3,
}

class BurgerBuilder extends Component {
  /**
   * Set Up The Burger State.
   * We set up the burger state here instead of in the Burger component
   * because we want to be able to share information between the Burger
   * and the BurgerControls container.
   */
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    // The base price of a burger is initialized here at $5. This value change as ingredients are added to and removed from the burger.
    totalPrice: 5,
  }

  /**
   * This allows us to add an ingredient to the burger.
   * Adding an ingredient means two things
   * 1. We show the added ingredient in the UI
   * 2. We update the 'ingredients' state by increasing the given ingredient by 1
   */
  addIngredientHandler = (type) => {
    // obtain a copy of the 'ingredients' state
    const updatedIngredients = { ...this.state.ingredients };
    // update the value of the type of ingredient in the copy
    updatedIngredients[type] += 1;

    // update the 'totalPrice' state based on the price of the type of ingredient
    const totalPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = totalPrice + priceAddition;

    // update new state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
  }

  removeIngredientHandler = (type) => {
    /* We'll try to remove an ingredient on its count is not zero 
    (i.e. only if at least one of it has been added) */
    if (this.state.ingredients[type] !== 0) {
      // obtain a copy of the 'ingredients' state
      const updatedIngredients = { ...this.state.ingredients };
      // update the value of the type of ingredient in the copy
      updatedIngredients[type] -= 1;

      // update the 'totalPrice' state based on the price of the type of ingredient
      const totalPrice = this.state.totalPrice;
      const priceAddition = INGREDIENT_PRICES[type];
      const updatedTotalPrice = totalPrice - priceAddition;

      // update new state
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      });
    }
  }

  componentDidUpdate() {
    console.log(this.state.ingredients);
  }

  render() {
    return (
      <Aux>
        <h2 className={classes.burger}>Burger builder page.</h2>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientQuantities={this.state.ingredients}/>

        {/* Total Price */}
        <CostTracker total={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
