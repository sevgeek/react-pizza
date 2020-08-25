/** Import actions types */
import {
	ADD_CART,
	ORDER_CART,
	REMOVE_FROM_CART,
	SELECT_PIZZA_TYPE,
	SELECT_PIZZA_PROPS,
	SELECT_PIZZA_PROPS_IN_CART,
	CHANGE_PIZZA_COUNT_IN_CART,
} from './actionTypes'

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

/** Remove pizza from cart */
export const removePizzaFromCart = pizza => ({
	type: REMOVE_FROM_CART,
	pizza
})

/** Select pizza props in cart */
export const selectPizzaPropsInCart = props => ({
	type: SELECT_PIZZA_PROPS_IN_CART,
	props,
})

/** Order cart */
export const orderCart = () => ({
	type: ORDER_CART
})

/** Change pizza count in the cart */
export const changePizzaCountInCart = props => ({
	type: CHANGE_PIZZA_COUNT_IN_CART,
	props
})