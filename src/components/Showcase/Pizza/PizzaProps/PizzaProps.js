import React from 'react'
import classNames from 'classnames'
import props from './props'

/**
 * @name PizzaProps
 * @description Функциональный компонент отображения основных характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} selectConfigItem Call-back function: нажатие на характеристику
 */
const PizzaProps = ({ config, pizzaIndex, selectConfigItem }) => (
	<React.Fragment>
		<section className='mb-s'>
			<div className='mb-xs'>
				<div className='pizza-config grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					{renderSizeConfigForPizza(props, config, pizzaIndex, selectConfigItem)}
				</div>
			</div>
			<div className='pizza-config grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
				{renderDoughConfigForPizza(props, config, pizzaIndex, selectConfigItem)}
			</div>
		</section>
	</React.Fragment>
)

/**
 * @name renderSizeConfigForPizza
 * @description Преобразование размера для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} callbackFunction Call-back function: нажатие на характеристику
 */
const renderSizeConfigForPizza = (props, config, pizzaIndex, callbackFunction) => props.size.map(({ size, alias }) => {
	// Определяем активную характеристику
	const selected = config.size === size ? true : false
	return (
		<div
			key={`${pizzaIndex}${size}`}
			onClick={() => callbackFunction({ index: pizzaIndex, size })}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

/**
 * @name renderDoughConfigForPizza
 * @description Преобразование теста для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} callbackFunction Call-back function: нажатие на характеристику
 */
const renderDoughConfigForPizza = (props, config, pizzaIndex, callbackFunction) => props.dough.map(({ dough, alias }) => {
	// Определяем активную характеристику
	const selected = config.dough === dough ? true : false
	return (
		<div
			key={`${pizzaIndex}${dough}`}
			onClick={() => callbackFunction({ index: pizzaIndex, dough })}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

export default PizzaProps