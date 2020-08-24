import initState from './store'
import { SELECT_PIZZA_TYPE, SELECT_PIZZA_PROPS, ADD_CART, REMOVE_FROM_CART } from './actions/actionTypes'

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

		// Add pizza to cart...
		case ADD_CART:
			return addPizzaToCart(state, action.pizza)

		// Remove pizza from cart...
		case REMOVE_FROM_CART:
			return removePizzaFromCart(state, action.pizza)

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
 * @returns {Object} Новое состояние
 */
const changePropsOfPizza = (state, { id, type, size, dough }) => {
	// Копируем актуальный объект всех пицц из хранилища
	let allPizzas = { ...state.pizzas }

	// Получаем объект выбранной пиццы
	const currentPizza = allPizzas[type].filter(pizza => pizza.id === id)[0]

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = allPizzas[type].indexOf(currentPizza, 0)

	// Получаем свойства
	let { price, defaultPrice, config: { size: prevSize } } = currentPizza

	// Делаем проверку на изменение размера пиццы
	if (prevSize !== size) {
		console.log(`Размер пиццы изменился`)
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
	} else {
		console.log(`Размер пиццы не изменился`)
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

/**
 * @name addPizzaToCart
 * @description Добавление пиццы в корзину
 * @param {Object} state Актуальное состояние из хранилища
 * @param {Object} pizza Объект добавляемой пиццы
 * @returns {Object} Новое состояние
 */
const addPizzaToCart = (state, pizza) => {
	// Копируем актуальный state
	const prevCartArray = [...state.cart]

	// Добавляем объект пиццы
	prevCartArray.push(state.pizzas[pizza.type][pizza.id - 1])

	return {
		...state,
		cart: prevCartArray
	}
}

/**
 * @name removePizzaFromCart
 * @description Удаление пиццы из корзины
 * @param {Object} state Актуальное состояние из хранилища
 * @param {Object} pizza Объект удаляемой пиццы
 * @returns {Object} Новое состояние
 */
const removePizzaFromCart = (state, pizza) => {
	// Копируем актуальный state
	const prevCartArray = [...state.cart]

	// Определяем индекс удаляемой пиццы
	const removedPizzaiIndex = prevCartArray.findIndex(item => item.type === pizza.type && item.id === pizza.id)

	// Удаляем пиццу
	prevCartArray.splice(removedPizzaiIndex, 1)

	return {
		...state,
		cart: prevCartArray
	}
}