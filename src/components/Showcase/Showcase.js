import React from 'react'

/** Redux */
import { connect } from 'react-redux'
// Import actions
import { selectPizzaProps } from '../../redux/actions/actions'

/** Import components */
import PizzaItem from './PizzaItem/PizzaItem'

/**
 * @name Showcase
 * @description Функциональный компонент: контейнер для PizzaItem компонентов
 * @param {Array} pizzas Массив всех пицц из store
 * @param {String} selectedPizzaType Выбранная пользователем пицца
 * @param {Function} onSelectPizzaProps Функция выбора свойства пиццы
 */
const Showcase = ({ pizzas, selectedPizzaType = 'all', onSelectPizzaProps }) => (
	<section className='mt-xl'>
		<div className='grid grid-3-col grid-row-gap-xl grid-col-gap-0 col-justify-self_center'>
			{/* Делаем проверку выбора пользователя */}
			{selectedPizzaType === 'all'
				? renderAllPizzas(pizzas, onSelectPizzaProps)
				: renderPizzas(pizzas[selectedPizzaType], onSelectPizzaProps)}
		</div>
	</section>
)

/**
 * @name renderAllPizzas
 * @description Функция рендера всех пицц
 * @param {Array} allPizzas Массив объектов всех пицц
 * @param {Function} selectProps Функция изменения свойств пиццы
 */
const renderAllPizzas = (allPizzas, selectProps) =>
	Object.values(allPizzas)
		.map(data => data
			.map((array, index) => <PizzaItem key={index} data={array} selectProps={selectProps} />))

/**
 * @name renderPizzas
 * @description Функция рендера выбранного типа пицц
 * @param {Object} data Массив объектов пицц
 * @param {Function} selectProps Функция изменения свойств пиццы
 */
const renderPizzas = (data, selectProps) => data.map((array, index) =>
	<PizzaItem
		key={index}
		data={array}
		selectProps={selectProps} />)

/**
 * @name mapStateToProps
 * @description Преобразование state в props
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ pizzas, selectedPizzaType }) => ({
	pizzas, selectedPizzaType
})

/**
 * @name mapDispatchToProps
 * @description Преобразование dispatch в props
 * @param {Object} dispatch
 */
const mapDispatchToProps = dispatch => ({
	onSelectPizzaProps: props => dispatch(selectPizzaProps(props))
})


export default connect(mapStateToProps, mapDispatchToProps)(Showcase)