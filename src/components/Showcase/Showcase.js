import React from 'react'

/** Redux */
import { connect } from 'react-redux'
// Import actions
import { selectPizzaProps, addPizzaToCart } from '../../redux/actions/actions'

/** Import components */
import PizzaItem from './PizzaItem/PizzaItem'

/**
 * @name Showcase
 * @description Функциональный компонент: контейнер для PizzaItem компонентов
 * @param {Array} pizzas Массив всех пицц из store
 * @param {String} selectedPizzaType Выбранная пользователем пицца
 * @param {Function} onSelectPizzaProps Функция выбора свойства пиццы
 */
const Showcase = ({ pizzas, selectedPizzaType = 'all', onSelectPizzaProps, addPizzaToCart }) => (
	<section className='mt-xl'>
		<div className='grid grid-3-col grid-row-gap-xl grid-col-gap-0 col-justify-self_center'>
			{/* Делаем проверку выбора пользователя */}
			{selectedPizzaType === 'all'
				? renderAllPizzas(pizzas, onSelectPizzaProps, addPizzaToCart)
				: renderPizzas(pizzas[selectedPizzaType], onSelectPizzaProps, addPizzaToCart)}
		</div>
	</section>
)

/**
 * @name renderAllPizzas
 * @description Функция рендера всех пицц
 * @param {Array} allPizzas Массив объектов всех пицц
 * @param {Function} selectProps Функция изменения свойств пиццы
 * @param {Function} addPizzaToCart Функция добавления пиццы в корзину
 */
const renderAllPizzas = (allPizzas, selectProps, addPizzaToCart) =>
	Object.values(allPizzas)
		.map(data => data
			.map((array, index) => <PizzaItem key={index} data={array} selectProps={selectProps} addPizzaToCart={addPizzaToCart} />))

/**
 * @name renderPizzas
 * @description Функция рендера выбранного типа пицц
 * @param {Object} data Массив объектов пицц
 * @param {Function} selectProps Функция изменения свойств пиццы
 * @param {Function} addPizzaToCart Функция добавления пиццы в корзину
 */
const renderPizzas = (data, selectProps, addPizzaToCart) => data.map((array, index) =>
	<PizzaItem
		key={index}
		data={array}
		selectProps={selectProps}
		addPizzaToCart={addPizzaToCart} />)

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
	onSelectPizzaProps: props => dispatch(selectPizzaProps(props)),
	addPizzaToCart: pizza => dispatch(addPizzaToCart(pizza))
})


export default connect(mapStateToProps, mapDispatchToProps)(Showcase)