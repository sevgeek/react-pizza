import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaType } from '../../redux/actions/actions'

/** Import components */
import Logo from './Logo'
import CartButton from './CartButton'
import Navigation from './Navigation'

/**
 * @name Header
 * @description Функциональный компонент header
 * @param {Array} pizzaTypes Массив всех видов пицц
 * @param {String} selectedPizzaType Значение выбранного типа пиццы, с которым взаимодействуют
 * @param {Function} onSelectPizzaType Функция передачи выбранного типа пиццы
 * @param {Array} cart Корзина заказа
 */
const Header = ({ displayNavigation, pizzaTypes, selectedPizzaType, onSelectPizzaType, cart }) => (
	<header className='grid grid-3-col grid-gap-m'>

		<div className='col-2 col-align-self_center col-justify-self_start'>
			<Logo path={"/img/svg/react-pizza.svg"} />
		</div>

		<div className='col-1 col-align-self_center col-justify-self_end'>
			<CartButton cart={cart} />
		</div>

		<div className='col-3'>
			{displayNavigation &&
				<Navigation
					pizzaTypes={pizzaTypes}
					selectedPizzaType={selectedPizzaType}
					choosingTheTypeOfPizza={(value) => onSelectPizzaType(value)} />}
		</div>

	</header>
)

/**
 * mapStateToProps
 * @param {Array} pizzaTypes Массив видов пиццы
 * @param {String} selectedPizzaType Значение выбранного типа пиццы
 * @param {Array} cart Корзина заказа
 */
const mapStateToProps = ({ pizzaTypes, selectedPizzaType, cart }) => ({
	cart,
	pizzaTypes,
	selectedPizzaType
})

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
	onSelectPizzaType: pizzaType => dispatch(selectPizzaType(pizzaType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)