import React from 'react'
import classNames from 'classnames'

/**
 * Navigation
 * @name Navigation
 * @description Компонент вывода всех видов пицц
 * @param {Array} pizzaTypes Массив видов пиццы
 * @param {String} selectedPizzaType Значение выбранного типа пиццы
 * @param {CallableFunction} choosingTheTypeOfPizza Функция передачи значения выбранного вида пиццы
 */
const Navigation = ({ pizzaTypes, selectedPizzaType, choosingTheTypeOfPizza }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{pizzaTypes.map((type, index) => {
				return (
					<li
						key={`pizzaType_${index}`}
						className={classNames('flex-item', 'txt-l', { selected: (selectedPizzaType === type.value) })}
						onClick={() => choosingTheTypeOfPizza(type.value)} >
						<i className={`em ${type.emoji} mr-m`}></i>{type.title}
					</li>
				)
			})}
		</ul>
	)
}

export default Navigation