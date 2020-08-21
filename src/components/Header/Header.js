import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaType } from '../../redux/actions/actions'

/** Import components */
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

/**
 * @name Header
 * @description Функциональный компонент шапки сайта
 * @param {Array} pizzaTypes Массив видов пицц
 * @param {String} selectedPizzaType Значение выбранного типа пиццы
 * @param {Function} onSelectPizzaType Функция передачи выбранного типа пиццы в reducer
 */
const Header = ({ pizzaTypes, selectedPizzaType, onSelectPizzaType }) => (
	<header className='grid grid-3-col grid-gap-m'>

		{/* Logo */}
		<div className='col-2 col-align-self_center col-justify-self_start'>
			<Logo path={"/img/svg/react-pizza.svg"} />
		</div>

		{/* Cart */}
		<div className='col-1 col-align-self_center col-justify-self_end'>
			<Cart />
		</div>

		{/* Navigation */}
		<div className='col-3'>
			<Navigation
				pizzaTypes={pizzaTypes}
				selectedPizzaType={selectedPizzaType}
				choosingTheTypeOfPizza={(value) => onSelectPizzaType(value)} />
		</div>

	</header>
)

/**
 * mapStateToProps
 * @name mapStateToProps
 * @description Преобразование состояния из хранилища в props
 * @param {Array} pizzaTypes Массив видов пиццы
 * @param {String} selectedPizzaType Значение выбранного типа пиццы
 */
const mapStateToProps = ({ pizzaTypes, selectedPizzaType }) => ({
	pizzaTypes,
	selectedPizzaType
})

/**
 * mapDispatchToProps
 * @name mapDispatchToProps
 * @description Преобразование dispatch в пропсы
 * @param {Function} dispatch Функция Redux по доставке action в reducer
 */
const mapDispatchToProps = dispatch => ({
	onSelectPizzaType: pizzaType => dispatch(selectPizzaType(pizzaType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)