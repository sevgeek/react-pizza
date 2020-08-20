import React from 'react'

/** Import components */
import PizzaProps from './PizzaProps/PizzaProps'

/**
 * @name Pizza
 * @description Функциональный компонент отображения пиццы
 * @param {Array} pizzas Pizzas array from store
 * @param {String} selectedPizzaType Selected pizza type
 */
const Pizza = ({ pizzas, selectedPizzaType = 'all', selectProps }) => (
	<React.Fragment>
		{/* Делаем проверку выбора пользователя */}
		{selectedPizzaType === 'all'
			? renderPizzas(pizzas, selectProps)
			: renderPizzas((pizzas.filter((pizza) => pizza.type === selectedPizzaType)), selectProps)}
	</React.Fragment>
)

/**
 * @name renderPizzas
 * @description Функция рендера массива пицц
 * @param {Array} data Массив объектов: пицц
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderPizzas = (data, selectProps) => data.map(({ type, config, img, title, content, price }, index) => (
	<div className='col-1' key={`${type}_${index}`}>
		<div className='pizza'>
			<img className='pizza-img mb-s' alt={title} src={img} />
			<p className='pizza-title txt-l mb-s'>{title}</p>
			<p className='pizza-content txt-m mb-s'>{firstLetterToUpperCase(content.join(', '))}</p>

			{/* Render pizza config's */}
			<PizzaProps
				config={config}
				pizzaIndex={index}
				selectProps={(props) => selectProps(props)}
			/>

			<div className='grid grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
				<p className='pizza-price col-1 txt-l col-align-self_center'>от {price} ₽</p>
				<button className='pizza-order col-1'>Выбрать</button>
			</div>
		</div>
	</div>
))

/**
 * @name firstLetterToUpperCase
 * @description Перевод первого символа строки в верхний регистр
 * @param {String} string Описание состава пиццы
 * @returns {String}
 */
const firstLetterToUpperCase = string => string[0].toUpperCase() + string.slice(1)

export default Pizza