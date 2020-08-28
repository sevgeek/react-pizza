import initState from './store'
import {
	ADD_CART,
	ORDER_CART,
	REMOVE_FROM_CART,
	SELECT_PIZZA_TYPE,
	SELECT_PIZZA_PROPS,
	SELECT_PIZZA_PROPS_IN_CART,
	CHANGE_PIZZA_COUNT_IN_CART,
} from './actions/actionTypes'

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

		// Select pizza props in cart
		case SELECT_PIZZA_PROPS_IN_CART:
			return changePropsOfPizzaInCart(state, action.props)

		// Order cart
		case ORDER_CART:
			return orderCart(state)

		// Change pizza count in cart
		case CHANGE_PIZZA_COUNT_IN_CART:
			return changePizzaCountInCart(state, action.props)

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
	let pizzas = { ...state.pizzas }

	// Получаем объект выбранной пиццы
	const currentPizza = pizzas[type].find(pizza => pizza.id === id)

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = pizzas[type].indexOf(currentPizza, 0)

	// Получаем свойства
	let { price, defaultPrice, config: { size: prevSize } } = currentPizza

	// Делаем проверку на изменение размера пиццы
	if (prevSize !== size) {
		console.log(`Размер пиццы изменился`)
		price = defaultPrice

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
	pizzas[type].splice(currentPizzaIndex, 1, newPropsForCurrentPizza)

	// Возвращаем обновлённое состояние
	return {
		...state,
		pizzas
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

	// Получаем добавляему пиццу, определяем свойство count
	const addedPizza = state.pizzas[pizza.type][pizza.id - 1]
	addedPizza.count = 1

	// Добавляем объект пиццы
	prevCartArray.push(addedPizza)

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
const removePizzaFromCart = (state, { type, id }) => {
	// Копируем актуальный state: корзина и все пицыы
	const cart = [...state.cart]
	const pizzas = { ...state.pizzas }

	/** Работаем с корзиной */

	// Определяем индекс удаляемой пиццы из корзины
	const removedPizzaiIndex = cart.findIndex(item => item.type === type && item.id === id)

	// Удаляем пиццу
	cart.splice(removedPizzaiIndex, 1)

	/** Работаем с массивом всех пицц */

	// Получаем объект выбранной пиццы
	const currentPizza = pizzas[type].find(pizza => pizza.id === id)

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = pizzas[type].indexOf(currentPizza, 0)

	// Сбрасываем свойства пиццы
	const newPropsForDeletedPizza = {
		...currentPizza,
		config: {
			size: 'small',
			dough: 'standart'
		}
	}

	// Заменяем объект удалённой пиццы на новый, модифицируя копию массива
	pizzas[type].splice(currentPizzaIndex, 1, newPropsForDeletedPizza)

	return {
		...state,
		pizzas,
		cart
	}
}

/**
 * @name changePropsOfPizzaInCart
 * @description Изменение свойств пиццы из корзины
 * @param {Object} state Актуальное состояние из хранилища
 * @param {Number} id Индентификатор изменяемой пиццы
 * @param {String} type Тип изменяемой пиццы
 * @param {String} size Свойство пиццы: размер
 * @param {String} dough Свойство пиццы: вид теста
 * @returns {Object} Новое состояние
 */
const changePropsOfPizzaInCart = (state, { id, type, size, dough }) => {
	// Копируем актуальный объект всех пицц из хранилища
	let cart = [...state.cart]

	// Получаем объект выбранной пиццы
	const currentPizza = cart.find(pizza => pizza.id === id && pizza.type === type)

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = cart.indexOf(currentPizza)

	// Получаем свойства
	let { price, defaultPrice, config: { size: prevSize } } = currentPizza

	// Делаем проверку на изменение размера пиццы
	if (prevSize !== size) {
		console.log(`Размер пиццы изменился`)
		price = defaultPrice

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
	cart.splice(currentPizzaIndex, 1, newPropsForCurrentPizza)

	// Возвращаем обновлённое состояние
	return {
		...state,
		cart
	}
}

/**
 * @name orderCart
 * @description Оформление заказа: очистка корзины
 * @param {Object} state Актуальное состояние из хранилища
 * @returns {Object} Новое состояние
 */
const orderCart = state => {

	let defaultConfig = {
		size: 'small',
		dough: 'standart',
	}

	Object.values(state.pizzas.meaty).forEach((item) => item.config = defaultConfig)

	return {
		...state,
		selectedPizzaType: undefined,
		cart: []
	}
}

/**
 * @name changePizzaCountInCart
 * @description Изменение количества пиццы в корзине
 * @param {Object} state Актуальное состояние из хранилища
 * @param {Number} id Индентификатор изменяемой пиццы
 * @param {String} type Тип изменяемой пиццы
 * @param {String} count Количество пиццы
 * @returns {Object} Новое состояние
 */
const changePizzaCountInCart = (state, { id, type, count }) => {
	// Копируем актуальный объект всех пицц из корзины
	let cart = [...state.cart]

	// Получаем объект выбранной пиццы
	const currentPizza = cart.find(pizza => pizza.id === id && pizza.type === type)

	// Получаем индекс выбранной пиццы
	const currentPizzaIndex = cart.indexOf(currentPizza)

	// Обновляем свойства выбранной пиццы
	const newCountForCurrentPizza = {
		...currentPizza,
		count
	}

	// Заменяем объект выбранной пиццы на новый, модифицируя копию массива
	cart.splice(currentPizzaIndex, 1, newCountForCurrentPizza)

	// Возвращаем обновлённое состояние
	return {
		...state,
		cart
	}
}