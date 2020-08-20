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
			return changePropsOfPizza(state, action.props)

		default:
			return state;
	}
}

/**
 * @name changePropsOfPizza
 * @description Изменение свойств пиццы
 * @param {Object} state Актуальное состояние из хранилища
 * @param {Number} index Порядковый индекс изменяемой пиццы
 * @param {String} size Свойство пиццы: размер
 * @param {String} dough Свойство пиццы: вид теста
 * @returns {Array} Новое состояние
 */
const changePropsOfPizza = (state, { index, size, dough }) => {
	// Copy actual pizzas from state
	let pizzas = [...state.pizzas]

	// The change of the price according to the size
	let price = state.pizzas[index].defaultPrice
	switch (size) {
		// Leave default price
		case 'small':
			price = state.pizzas[index].defaultPrice
			break;

		// Increase by 75
		case 'medium':
			price = state.pizzas[index].defaultPrice + 75
			break;

		// Increase by 100
		case 'big':
			price = state.pizzas[index].defaultPrice + 100
			break;

		default:
			price = state.pizzas[index].defaultPrice
			break;
	}

	// Create new properties for chenged pizza
	const newPizza = {
		...state.pizzas[index],
		price,
		config: {
			size,
			dough
		}
	}

	// Splice pizza in copied actual state
	pizzas.splice(index, 1, newPizza)

	return {
		...state,
		pizzas
	}
}