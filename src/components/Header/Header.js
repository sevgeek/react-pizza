import React from 'react'

/** Redux */
import { connect } from 'react-redux'
// Import actions
import { selectPizzaType } from '../../redux/actions/actions'

/** Import components */
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

/**
 * @name Header
 * @description Функциональный компонент header
 * @param {Array} pizzaTypes Массив всех видов пицц
 * @param {String} selectedPizzaType Значение выбранного типа пиццы, с которым взаимодействуют
 * @param {Function} onSelectPizzaType Функция передачи выбранного типа пиццы
 */
const Header = ({ pizzaTypes, selectedPizzaType, onSelectPizzaType }) => (
	<header className='grid grid-3-col grid-gap-m'>

		<div className='col-2 col-align-self_center col-justify-self_start'>
			<Logo path={"/img/svg/react-pizza.svg"} />
		</div>

		<div className='col-1 col-align-self_center col-justify-self_end'>
			<Cart />
		</div>

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
 * @description Преобразование state в props
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
 * @description Преобразование dispatch в props
 * @param {Function} dispatch Функция Redux
 */
const mapDispatchToProps = dispatch => ({
	onSelectPizzaType: pizzaType => dispatch(selectPizzaType(pizzaType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)