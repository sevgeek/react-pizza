import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaProps } from '../../redux/actions/actions'

/** Import components */
import Pizza from './Pizza/Pizza'

/**
 * @name Main
 * @description Функциональный компонент контейнера для всех компонентов пицц
 * @param {Array} pizzas Pizzas array from store
 * @param {String} selectedPizzaType Selected pizza type
 * @param {Function} selectProps Функция выбора свойства пиццы
 */
const Showcase = ({ pizzas, selectedPizzaType, onSelectPizzaProps }) => (
	<section className='mt-xl'>
		<div className='grid grid-3-col grid-row-gap-xl grid-col-gap-0 col-justify-self_center'>
			<Pizza
				pizzas={pizzas}
				selectedPizzaType={selectedPizzaType}
				selectProps={(props) => onSelectPizzaProps(props)}
			/>
		</div>
	</section>
)

/**
 * @name mapStateToProps
 * @description Преобразование состояния из хранилища в props
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ pizzas, selectedPizzaType }) => ({
	pizzas, selectedPizzaType
})

const mapDispatchToProps = dispatch => ({
	onSelectPizzaProps: props => dispatch(selectPizzaProps(props))
})


export default connect(mapStateToProps, mapDispatchToProps)(Showcase)