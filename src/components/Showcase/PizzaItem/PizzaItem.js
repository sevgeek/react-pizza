import React from 'react'

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
	const pizzaID = { id, type }

	return (
		<div className='col-1' key={`${type}${id}`}>
			<div className='pizza'>
				<img className='pizza-img mb-s' alt={title} src={img} />
				<p className='pizza-title txt-l mb-s'>{title}</p>
				<p className='pizza-content txt-m mb-s'>{transfromPizzaContentToText(content.join(', '))}</p>

				{/* Render pizza props */}
				<PizzaProps
					config={config}
					pizza={pizzaID}
					selectProps={(props) => selectProps(props)} />

				<div className='grid grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
					<p className='pizza-price col-1 txt-l col-align-self_center'>{price} ₽</p>
					<div
						className='pizza-order col-1'
						onClick={() => addPizzaToCart(pizzaID)}
					>В корзину</div>
				</div>
			</div>
		</div>
	)
}

export default PizzaItem