import initState from './store'
import { SELECT_PIZZA_TYPE, SELECT_PIZZA_PROPS } from './actions/actionTypes'

/**
 * @name reducer
 * @description Main reducer
 * @param {Object} state Initial store
 * @param {Object} action Action object
 */
export default function reducer(state = initState, action) {
	/** Switch actions */
	switch (action.type) {
		// Select pizza type...
		case SELECT_PIZZA_TYPE:
			return {
				...state,
				selectedPizzaType: action.pizzaType
			}

		// Select pizza props...
		case SELECT_PIZZA_PROPS:
			// Copy actual pizzas from state
			let newPizzasArray = [...state.pizzas]

			// Create new properties for chenged pizza
			const newPizza = {
				...state.pizzas[action.props.index],
				config: {
					size: action.props.size,
					dough: action.props.dough
				}
			}

			// Splice pizza in copied actual state
			newPizzasArray.splice(action.props.index, 1, newPizza)

			// Return new state
			return {
				...state,
				pizzas: newPizzasArray
			}

		default:
			return state;
	}
}