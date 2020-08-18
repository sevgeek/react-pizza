/** Import actions types */
import { SELECT_PIZZA_TYPE } from './actionTypes'

/** Actions creators */

/** Select pizza type */
export const selectPizzaType = pizzaType => ({
	type: SELECT_PIZZA_TYPE,
	pizzaType
})