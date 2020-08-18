import React from 'react'

/**
 * @name Pizza
 * @description Функциональный компонент отображения пиццы
 * @param {Array} pizzas Pizzas array from store
 * @param {String} selectedPizzaType Selected pizza type
 */
const Pizza = ({ pizzas, selectedPizzaType = 'all' }) => (
	<React.Fragment>
		{/* Делаем проверку выбора пользователя */}
		{selectedPizzaType === 'all'
			? renderPizzas(pizzas)
			: renderPizzas(pizzas.filter((pizza) => pizza.type === selectedPizzaType))}
	</React.Fragment>
)

/**
 * @name renderPizzas
 * @description Функция рендера массива пицц
 * @param {Array} data Массив объектов: пицц
 */
const renderPizzas = data => data.map(({ type, img, title, content, price }, index) => (
	<div className='col-1' key={`${type}_${index}`}>
		<div className='pizza'>
			<img className='pizza-img mb-s' alt={title} src={img} />
			<p className='pizza-title txt-l mb-s'>{title}</p>
			<p className='pizza-content txt-m mb-xl'>{firstLetterToUpperCase(content.join(', '))}</p>
			<div className='flexbox flex-justify_between flex-align-items_center'>
				<p className='pizza-price flex-item txt-l'>от {price} ₽</p>
				<button className='pizza-order flex-item'>Выбрать</button>
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