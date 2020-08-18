import initState from './store'
import { SELECT_PIZZA_TYPE } from './actions/actionTypes'

/** Main reducer */
export default function reducer(state = initState, action) {
	/** Switch actions */
	switch (action.type) {
		// Select pizza type...
		case SELECT_PIZZA_TYPE:
			return {
				...state,
				selectedPizzaType: action.pizzaType
			}

		default:
			return state;
	}
}