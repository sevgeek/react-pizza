import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaProps, addPizzaToCart } from '../../redux/actions/actions'

/** Import components */
import PizzaItem from './PizzaItem/PizzaItem'

/**
 * @name Showcase
 * @description Функциональный компонент: контейнер для PizzaItem's компонентов
 * @param {Object} pizzas Массив всех пицц из store
 * @param {String} selectedPizzaType Выбранная пользователем пицца
 * @param {Function} onSelectPizzaProps Функция выбора свойства пиццы
 * @param {Array} cart Массив объектов в корзине
 */
const Showcase = ({ pizzas, selectedPizzaType = 'all', onSelectPizzaProps, addPizzaToCart, cart }) => {

	/**
	 * @name renderPizzasByType
	 * @description Рендер пицц в зависимости от выбора пользователя
	 * @param {String} type Тип выбираем пользователем пиццы
	 * @param {Object} pizzas Объект пицц
	 */
	const renderPizzasByType = (type, pizzas) => {
		// Проверяем выбор пользователя
		return type === 'all'
			// Делаем рендер всех пицц по очереди
			? Object.values(pizzas)
				.map(array =>
					renderPizzaItems(
						array,
						onSelectPizzaProps,
						addPizzaToCart,
						cart
					))
			// Делаем рендер определённого типа
			: renderPizzaItems(
				pizzas[selectedPizzaType],
				onSelectPizzaProps,
				addPizzaToCart,
				cart
			)
	}

	return (
		<section className='mt-xl'>
			<div className='grid grid-4-col grid-row-gap-xl grid-col-gap-0 col-justify-self_center'>
				{renderPizzasByType(selectedPizzaType, pizzas)}
			</div>
		</section>
	)
}

/**
 * @name renderPizzaItems
 * @description Функция рендера пицц
 * @param {Object} data Массив пицц
 * @param {Function} selectProps Функция изменения свойств пиццы
 * @param {Function} addPizzaToCart Функция добавления пиццы в корзину
 * @param {Array} cart Массив объектов в корзине
 */
const renderPizzaItems = (data, selectProps, addPizzaToCart, cart) =>
	data.map((item, index) =>
		<PizzaItem
			cart={cart}
			key={`${item.type}_${++index}`}
			data={item}
			selectProps={selectProps}
			addPizzaToCart={addPizzaToCart} />)

/**
 * @name mapStateToProps
 * @param {Array} cart Массив объектов в корзине
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ pizzas, selectedPizzaType, cart }) => ({
	cart,
	pizzas,
	selectedPizzaType,
})

/**
 * @name mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
	addPizzaToCart: pizza => dispatch(addPizzaToCart(pizza)),
	onSelectPizzaProps: props => dispatch(selectPizzaProps(props)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Showcase)