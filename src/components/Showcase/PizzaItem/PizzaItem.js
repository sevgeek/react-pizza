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
 */
const PizzaItem = ({ data, selectProps, addPizzaToCart }) => {
	// Get data
	const { id, type, title, img, content, config, price } = data
	const pizzaId = { id, type }

	/** State: добавление пиццы в корзину */
	const [addedToCart, addToCart] = React.useState(false)

	// DOM node: button for adding pizza to the cart
	let pizzaButtonNode = undefined

	if (addedToCart) {
		pizzaButtonNode = (<Link to='/cart'><div className='added pizza-order col-1'>Оформить</div></Link>)
	} else {
		pizzaButtonNode = (<div
			className='pizza-order col-1'
			onClick={() => {
				addPizzaToCart(pizzaId)
				addToCart(true)
			}}>Выбрать</div>)
	}

	return (
		<div className='col-1' key={`${type}${id}`}>
			<div className='pizza'>
				<img className='pizza-img mb-s' alt={title} src={img} />
				<p className='pizza-title txt-l mb-s'>{title}</p>
				<p className='pizza-content txt-m mb-s'>{transfromPizzaContentToText(content.join(', '))}</p>

				{/* Render pizza props */}
				{addedToCart
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

export default PizzaItem