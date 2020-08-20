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
			? renderAllPizzas(pizzas, selectProps)
			: renderPizzas(pizzas[selectedPizzaType], selectProps)}
	</React.Fragment>
)

/**
 * @name renderAllPizzas
 * @description Функция рендера массива всех пицц
 * @param {Array} data Массив объектов: пицц
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderAllPizzas = (data, selectProps) => Object.values(data).map((type) => type.map(({ id, type, title, img, content, config, price }) => (
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
)))

/**
 * @name renderPizzas
 * @description Функция рендера массива определённого типа пиццы
 * @param {Object} data Массив объектов: пицц
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderPizzas = (data, selectProps) => (data).map(({ id, type, title, img, content, config, price }) => (
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

/**
 * @name firstLetterToUpperCase
 * @description Перевод первого символа строки в верхний регистр
 * @param {String} string Описание состава пиццы
 * @returns {String}
 */
const firstLetterToUpperCase = string => string[0].toUpperCase() + string.slice(1)

export default Pizza