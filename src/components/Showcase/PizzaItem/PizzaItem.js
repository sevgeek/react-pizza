import React from 'react'

/** Import components */
import { Link } from 'react-router-dom'

/** Import components */
import PizzaProps from './PizzaProps/PizzaProps'

/** Import functions */
import transfromPizzaContentToText from '../../../functions'

/**
 * @name PizzaItem
 * @description Функциональный компонент пиццы
 * @param {Object} data Данные о пицце
 * @param {Function} selectProps Функция выбора свойства пиццы
 * @param {Function} addPizzaToCart Функция добавления пиццы в корзину
 * @param {Array} cart Массив объектов в корзине
 */
const PizzaItem = ({ data, selectProps, addPizzaToCart, cart }) => {
	// Get data
	const { id, type, title, img, content, config, price } = data
	const pizzaId = { id, type }

	// DOM node: button for adding pizza to the cart
	let pizzaButtonNode = undefined

	// Check pizza in the cart
	checkPizzaInTheCart(pizzaId, cart)
		? pizzaButtonNode = (<Link to='/cart'><div className='added pizza-order col-1'>Оформить</div></Link>)
		: pizzaButtonNode = (<div className='pizza-order col-1' onClick={() => { addPizzaToCart(pizzaId) }}>Выбрать</div>)

	return (
		<div className='col-1' key={`${type}${id}`}>
			<div className='pizza'>
				<img className='pizza-img mb-s' alt={title} src={img} />
				<p className='pizza-title txt-l mb-s'>{title}</p>
				<p className='pizza-content txt-m mb-s'>{transfromPizzaContentToText(content.join(', '))}</p>

				{/* Render pizza props */}
				{checkPizzaInTheCart(pizzaId, cart)
					? null
					: <PizzaProps
						pizza={pizzaId}
						config={config}
						selectProps={(props) => selectProps(props)} />}

				<div className='grid grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
					<p className='pizza-price col-1 txt-l col-align-self_center'>{price} ₽</p>
					{pizzaButtonNode}
				</div>
			</div>
		</div>
	)
}

/**
* @name checkPizzaInTheCart
* @description Проверка пиццы на наличие в корзине
* @param {Object} pizza ID пиццы
* @param {Array} cart Массив объектов пицц в корзине
* @returns {Boolean} Наличие пиццы в корзине
*/
export function checkPizzaInTheCart(pizza, cart) {
	if (cart !== undefined && cart.length > 0) {
		// Search pizza
		const searchPizza = cart.filter(item =>
			item.type === pizza.type && item.id === pizza.id)
		// Return result
		return searchPizza.length > 0 ? true : false
	} else return false
}

export default PizzaItem