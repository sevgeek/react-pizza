import React from 'react'

/** Redux */
import { connect } from 'react-redux'

/** Import components */
import Pizza from './Pizza/Pizza'

/**
 * @name Main
 * @description Функциональный компонент контейнера для всех компонентов пицц
 * @param {Array} pizzas Pizzas array from store
 * @param {String} selectedPizzaType Selected pizza type
 */
const Main = ({ pizzas, selectedPizzaType }) => (
	<section className='mt-xl'>
		<div className='grid grid-3-col grid-gap-xl col-justify-self_center'>
			<Pizza selectedPizzaType={selectedPizzaType} pizzas={pizzas} />
		</div>
	</section>
)

/**
 * mapStateToProps
 * @name mapStateToProps
 * @description Преобразование состояния из хранилища в props
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ pizzas, selectedPizzaType }) => ({
	pizzas, selectedPizzaType
})

export default connect(mapStateToProps)(Main)