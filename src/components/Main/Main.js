import React from 'react'

/** Redux */
import { connect } from 'react-redux'

/** Import components */
import Pizza from './Pizza/Pizza'

const Main = ({ pizzas, selectedPizzaType }) => {
	return (
		<section className='mt-xl'>
			<div className='grid grid-3-col grid-gap-xl col-justify-self_center'>
				<Pizza selectedPizzaType={selectedPizzaType} pizzas={pizzas} />
			</div>
		</section>
	)
}

/**
 * mapStateToProps
 * @name mapStateToProps
 * @description Преобразование состояния из хранилища в props
 * @param {Object} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ pizzas, selectedPizzaType }) => ({
	pizzas, selectedPizzaType
})

export default connect(mapStateToProps)(Main)