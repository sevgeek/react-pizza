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
 * @param {Number} id Индентификатор изменяемой пиццы
 * @param {String} type Тип изменяемой пиццы
 * @param {String} size Свойство пиццы: размер
 * @param {String} dough Свойство пиццы: вид теста
 * @returns {Array} Новое состояние
 */
const changePropsOfPizza = (state, { id, type, size, dough }) => {
	// Копируем актуальный объект всех пицц из хранилища
	let allPizzas = { ...state.pizzas }

	// Получаем объект выбранной пиццы
	const currentPizza = allPizzas[type].filter(pizza => pizza.id === id)[0]

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = allPizzas[type].indexOf(currentPizza, 0)

	// Получаем свойства
	let { price, defaultPrice } = currentPizza

	switch (size) {
		// Leave default price
		case 'small':
			price = defaultPrice
			break;

		// Increase by 75
		case 'medium':
			price = price + 75
			break;

		// Increase by 100
		case 'big':
			price = price + 100
			break;

		default:
			price = defaultPrice
			break;
	}

	// Обновляем свойства выбранной пиццы
	const newPropsForCurrentPizza = {
		...currentPizza,
		price,
		config: {
			size,
			dough
		}
	}

	// Заменяем объект выбранной пиццы на новый, модифицируя копию массива
	allPizzas[type].splice(currentPizzaIndex, 1, newPropsForCurrentPizza)

	// Возвращаем обновлённое состояние
	return {
		...state,
		pizzas: allPizzas
	}
}