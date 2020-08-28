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
const Navigation = ({ pizzaTypes, selectedPizzaType, choosingTheTypeOfPizza }) => (
	<ul className='navigation flexbox flex-justify_around'>
		{pizzaTypes
			.map((type, index) => {
				return (
					<li
						key={`pizzaType_${index}`}
						className={classNames(
							'h4',
							'flex-item',
							{ selected: (selectedPizzaType === type.value) })}
						onClick={() => choosingTheTypeOfPizza(type.value)}>
						<i className={`em ${type.emoji} mr-s`}></i>{type.title}
					</li>
				)
			})}
	</ul>
)

/** Сравнение входящих props */
function areEqual(prevProps, nextProps) {
	return prevProps.pizzaTypes !== nextProps.pizzaTypes ? true : false
}

export default React.memo(Navigation, areEqual)