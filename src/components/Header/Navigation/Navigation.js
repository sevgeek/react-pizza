import React from 'react'
import classNames from 'classnames'

/**
 * Navigation
 * @name Navigation
 * @description Функциональный компонент вывода меню пицц
 * @param {Array} pizzaTypes Массив видов пиццы
 * @param {String} selectedPizzaType Значение выбранного типа пиццы
 * @param {Function} choosingTheTypeOfPizza Функция передачи выбранного типа пиццы
 */
const Navigation = ({ pizzaTypes, selectedPizzaType, choosingTheTypeOfPizza }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{pizzaTypes.map((type, index) => {
				return (
					<li
						key={`pizzaType_${index}`}
						onClick={() => choosingTheTypeOfPizza(type.value)}
						className={classNames('h4', 'flex-item', { selected: (selectedPizzaType === type.value) })}>
						<i className={`em ${type.emoji} mr-s`}></i>{type.title}
					</li>
				)
			})}
		</ul>
	)
}

export default Navigation