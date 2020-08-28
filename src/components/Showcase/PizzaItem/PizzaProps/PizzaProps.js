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
		<div className='pizza-config'>
			<div className='mb-xs'>
				<div className='grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					{/* Рендер свойств размера пиццы */}
					{renderSizeProps(
						props,
						config,
						pizza,
						selectProps
					)}
				</div>
			</div>
			<div className='grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
				{/* Рендер свойств вида пиццы */}
				{renderDoughProps(
					props,
					config,
					pizza,
					selectProps
				)}
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
	props.size.map(({ size, alias }) => {
		// Определяем актуальное свойство
		const selected = config.size === size ? true : false

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
					'pizza-config_value',
					{ 'selected': selected })}
				key={`sizePropsFor_${pizza.type}${pizza.id}`}>{alias}</div>
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
const renderDoughProps = (props, config, pizza, selectProps) => props.dough.map(({ dough, alias }) => {
	// Определяем актуальное свойство
	const selected = config.dough === dough ? true : false

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
				'pizza-config_value',
				{ 'selected': selected })}
			key={`doughPropsFor_${pizza.type}${pizza.id}`}>{alias}</div>
	)
})

export default PizzaProps