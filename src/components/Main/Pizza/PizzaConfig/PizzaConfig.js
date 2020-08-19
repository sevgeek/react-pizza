import React from 'react'
import classNames from 'classnames'

const PizzaConfig = ({ config }) => {

	/** Объект размеров пиццы */
	let sizeConfig = [
		{
			size: 'small',
			alias: 'Маленькая',
		},
		{
			size: 'medium',
			alias: 'Средняя',
		},
		{
			size: 'big',
			alias: 'Большая',
		}
	]

	/** Объект видов пицыы */
	let doughConfig = [
		{
			dough: 'standart',
			alias: 'Традиционное',
		},
		{
			dough: 'thin',
			alias: 'Тонкое',
		}
	]

	/**
	 * Преобразование настройки размера
	 */
	let renderSizeConfigForPizza = sizeConfig.map((item) => {
		let selected = config.size === item.size ? true : false
		return (
			<React.Fragment>
				<div key={item.size} className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{item.alias}</div>
			</React.Fragment>
		)
	})

	/**
	 * Преобразование настройки теста
	 */
	let renderDoughConfigForPizza = doughConfig.map((item) => {
		let selected = config.dough === item.dough ? true : false
		return (
			<React.Fragment>
				<div key={item.dough} className={classNames('pizza-config_value', 'col-1', { 'selected': selected })}>{item.alias}</div>
			</React.Fragment>
		)
	})


	return (
		<React.Fragment>
			<section className='mb-xs'>
				<div className='pizza-config grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					{renderSizeConfigForPizza}
				</div>
			</section>
			<section className='mb-s'>
				<div className='pizza-config grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
					{renderDoughConfigForPizza}
				</div>
			</section>
		</React.Fragment>
	)
}

export default PizzaConfig