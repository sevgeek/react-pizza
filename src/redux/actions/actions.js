/** Import actions types */
import { SELECT_PIZZA_TYPE, SELECT_PIZZA_PROPS, ADD_CART } from './actionTypes'

/** Actions creators */

/** Select pizza type */
export const selectPizzaType = pizzaType => ({
	type: SELECT_PIZZA_TYPE,
	pizzaType
})

/** Select pizza props */
export const selectPizzaProps = props => ({
	type: SELECT_PIZZA_PROPS,
	props
})

/** Add pizza to cart */
export const addPizzaToCart = pizza => ({
	type: ADD_CART,
	pizza
})