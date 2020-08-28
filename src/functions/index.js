/**
 * @name transfromPizzaContentToText
 * @description Перевод первого символа строки в верхний регистр
 * @param {String} string Описание состава пиццы
 * @returns {String} Единое описание состава пиццы
 */
export const transfromPizzaContentToText = string => string[0].toUpperCase() + string.slice(1)

/**
* @name checkPizzaInTheCart
* @description Проверка пиццы на наличие в корзине
* @param {Object} pizza ID пиццы
* @param {Array} cart Массив объектов пицц в корзине
* @returns {Boolean} Наличие пиццы в корзине
*/
export const checkPizzaInTheCart = (pizza, cart) => {
	if (cart !== undefined && cart.length > 0) {
		// Search pizza
		const searchPizza = cart.filter(item =>
			item.type === pizza.type && item.id === pizza.id)

		// Return result
		return searchPizza.length > 0 ? true : false
	} else return false
}

export default transfromPizzaContentToText