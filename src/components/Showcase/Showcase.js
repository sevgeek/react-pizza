import React from 'react'

/** Redux */
import { connect } from 'react-redux'
// Import actions
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
const Showcase = ({ pizzas, selectedPizzaType = 'all', onSelectPizzaProps, addPizzaToCart, cart }) => (
	<section className='mt-xl'>
		<div className='grid grid-4-col grid-row-gap-xl grid-col-gap-0 col-justify-self_center'>

			{/* Делаем проверку типа отображаемых пицц */}
			{selectedPizzaType === 'all'
				? Object.values(pizzas)
					.map(array =>
						renderPizzaItems(
							array,
							onSelectPizzaProps,
							addPizzaToCart,
							cart
						))
				: renderPizzaItems(
					pizzas[selectedPizzaType],
					onSelectPizzaProps,
					addPizzaToCart,
					cart
				)}
		</div>
	</section>
)

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
 * @description Преобразование state в props
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 * @param {Array} cart Массив объектов в корзине
 */
const mapStateToProps = ({ pizzas, selectedPizzaType, cart }) => ({
	pizzas, selectedPizzaType, cart
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