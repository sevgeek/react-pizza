/** Import actions types */
import { SELECT_PIZZA_TYPE, SELECT_PIZZA_PROPS } from './actionTypes'

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