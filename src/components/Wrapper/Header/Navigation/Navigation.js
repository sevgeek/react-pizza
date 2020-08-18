import React from 'react'

/**
 * Navigation
 * @name Navigation
 * @description Компонент вывода всех видов пицц
 * @param {Array} pizzaTypes Массив видов пиццы
 * @param {CallableFunction} choosingTheTypeOfPizza Функция передачи значения выбранного вида пиццы
 */
const Navigation = ({ pizzaTypes, choosingTheTypeOfPizza }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{pizzaTypes.map((type, index) => {
				return (
					<li
						key={`pizzaType_${index}`}
						className="flex-item txt-m"
						onClick={() => choosingTheTypeOfPizza(type.value)} >
						<i className={`em ${type.emoji} mr-m`}></i>{type.title}
					</li>
				)
			})}
		</ul>
	)
}

export default Navigation