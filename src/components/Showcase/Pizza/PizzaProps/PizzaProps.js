import React from 'react'
import classNames from 'classnames'
import props from './props'

/**
 * @name PizzaProps
 * @description Функциональный компонент отображения основных характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Object} pizza Данные о пицце: id, type
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const PizzaProps = ({ pizza, config, selectProps }) => (
	<React.Fragment>
		<div className='pizza-config'>
			<div className='grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
				{renderSizeProps(props, config, pizza, selectProps)}
			</div>
		</div>
		<div className='pizza-config'>
			<div className='grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
				{renderDoughProps(props, config, pizza, selectProps)}
			</div>
		</div>
	</React.Fragment>
)

/**
 * @name renderSizeProps
 * @description Преобразование размера для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Object} pizza Порядковый номер (индекс) пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderSizeProps = (props, config, pizza, selectProps) => props.size.map(({ size, alias }, index) => {
	// Определяем активную характеристику
	const selected = config.size === size ? true : false
	return (
		<div
			key={`${pizza.type}${pizza.id}_${index}`}
			onClick={() => selectProps({
				id: pizza.id,
				type: pizza.type,
				size,
				dough: config.dough
			})}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

/**
 * @name renderDoughProps
 * @description Преобразование теста для пиццы, исходя из стандартных значений
 * @param {Object} props Описание всех характеристик для пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Number} pizza Порядковый номер (индекс) пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const renderDoughProps = (props, config, pizza, selectProps) => props.dough.map(({ dough, alias }, index) => {
	// Определяем активную характеристику
	const selected = config.dough === dough ? true : false
	return (
		<div
			key={`${pizza.type}${pizza.id}_${index}`}
			onClick={() => selectProps({
				id: pizza.id,
				type: pizza.type,
				dough,
				size: config.size
			})}
			className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{alias}</div>
	)
})

export default PizzaProps