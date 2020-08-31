import React from 'react'
import classNames from 'classnames'
import props from './props'

/**
 * @name PizzaProps
 * @description Функциональный компонент: отображение свойств пиццы
 * @param {Object} config Характеристики пиццы из store
 * @param {Object} pizza Идентификатор пиццы
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const PizzaProps = ({ config, pizza, selectProps }) => (
	<React.Fragment>
		<div className='pizza__config'>
			<div className='mb-xs'>
				<div className='grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					{renderSizeProps(props, config, pizza, selectProps)}
				</div>
			</div>
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
const renderSizeProps = (props, config, pizza, selectProps) =>
	props.size
		.map(({ size, alias }, index) => {
			let selected = config.size === size ? true : false

			return (
				<div
					data-props='size'
					onClick={() => selectProps({
						size,
						id: pizza.id,
						type: pizza.type,
						dough: config.dough,
					})}
					className={classNames(
						'col-1',
						'pizza__config-value',
						{ 'selected': selected })}
					key={`sizeProps${index}For_${pizza.type}${pizza.id}`}>
					{alias}
				</div>
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
const renderDoughProps = (props, config, pizza, selectProps) =>
	props.dough
		.map(({ dough, alias }, index) => {
			let selected = config.dough === dough ? true : false

			return (
				<div
					data-props='dough'
					onClick={() => selectProps({
						dough,
						id: pizza.id,
						type: pizza.type,
						size: config.size,
					})}
					className={classNames(
						'col-1',
						'pizza__config-value',
						{ 'selected': selected })}
					key={`doughProps${index}For_${pizza.type}${pizza.id}`}>
					{alias}
				</div>
			)
		})

export default PizzaProps