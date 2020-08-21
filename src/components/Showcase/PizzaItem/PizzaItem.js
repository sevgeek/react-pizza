import React from 'react'

/** Import components */
import PizzaProps from './PizzaProps/PizzaProps'

/** Import functions */
import transfromPizzaContentToText from '../../../functions'

/**
 * @name PizzaItem
 * @description Функциональный компонент: отображение компонента пиццы
 * @param {Object} data Данные о пицце
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const PizzaItem = ({ data, selectProps }) => {
	// Get properties
	const { id, type, title, img, content, config, price } = data

	return (
		<div className='col-1' key={`${type}${id}`}>
			<div className='pizza'>
				<img className='pizza-img mb-s' alt={title} src={img} />
				<p className='pizza-title txt-l mb-s'>{title}</p>
				<p className='pizza-content txt-m mb-s'>{transfromPizzaContentToText(content.join(', '))}</p>

				{/* Render pizza config's */}
				<PizzaProps
					config={config}
					pizza={{ id, type }}
					selectProps={(props) => selectProps(props)} />

				<div className='grid grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
					<p className='pizza-price col-1 txt-l col-align-self_center'>{price} ₽</p>
					<button className='pizza-order col-1'>Выбрать</button>
				</div>
			</div>
		</div>
	)
}

export default PizzaItem