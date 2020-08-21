import React from 'react'

/** Import components */
import PizzaProps from './PizzaProps/PizzaProps'

const PizzaItem = ({ data, selectProps }) => {
	return (
		data.map(({ id, type, title, img, content, price, config }) => (
			<div className='col-1' key={`${type}${id}`}>
				<div className='pizza'>
					<img className='pizza-img mb-s' alt={title} src={img} />
					<p className='pizza-title txt-l mb-s'>{title}</p>
					<p className='pizza-content txt-m mb-s'>{firstLetterToUpperCase(content.join(', '))}</p>

					{/* Render pizza config's */}
					<PizzaProps
						config={config}
						pizza={{ id, type }}
						selectProps={(props) => selectProps(props)}
					/>

					<div className='grid grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
						<p className='pizza-price col-1 txt-l col-align-self_center'>{price} ₽</p>
						<button className='pizza-order col-1'>Выбрать</button>
					</div>
				</div>
			</div>
		))
	)
}

/**
 * @name firstLetterToUpperCase
 * @description Перевод первого символа строки в верхний регистр
 * @param {String} string Описание состава пиццы
 * @returns {String}
 */
const firstLetterToUpperCase = string => string[0].toUpperCase() + string.slice(1)

export default PizzaItem