import React from 'react'
import classNames from 'classnames'
import props from './props'

/**
 * @name PizzaProps
 * @description Функциональный компонент отображения основных характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const PizzaProps = ({ config, pizzaIndex, selectProps }) => (
	<React.Fragment>
		<section className='mb-s'>
			<div className='mb-xs'>
				<div className='pizza-config grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					{renderSizeProps(props, config, pizzaIndex, selectProps)}
				</div>
			</div>
			<div className='pizza-config grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
				{renderDoughProps(props, config, pizzaIndex, selectProps)}
			</div>
		</section>
	</React.Fragment>
)

/**
 * @name renderSizeProps
 * @description Преобразование размера для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderSizeProps = (props, config, pizzaIndex, selectProps) => props.size.map(({ size, alias }) => {
	// Определяем активную характеристику
	const selected = config.size === size ? true : false
	return (
		<div
			key={`${pizzaIndex}${size}`}
			onClick={() => selectProps({ index: pizzaIndex, size, dough: config.dough })}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

/**
 * @name renderDoughProps
 * @description Преобразование теста для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizzaIndex Порядковый номер (индекс) пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderDoughProps = (props, config, pizzaIndex, selectProps) => props.dough.map(({ dough, alias }) => {
	// Определяем активную характеристику
	const selected = config.dough === dough ? true : false
	return (
		<div
			key={`${pizzaIndex}${dough}`}
			onClick={() => selectProps({ index: pizzaIndex, dough, size: config.size })}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

export default PizzaProps