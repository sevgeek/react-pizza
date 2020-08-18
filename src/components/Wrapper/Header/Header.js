import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaType } from '../../../redux/actions/actions'

// Import components
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Header = ({ pizzaTypes, selectedPizzaType, onSelectPizzaType }) => (
	<header className='grid grid-2-col grid-gap-0'>
		{/* Pizza Logo */}
		<div className='col-1 col-align-self_center col-justify-self_start'>
			<Logo imagePath='/img/svg/react-pizza-logo.svg' />
		</div>

		{/* Cart Button */}
		<div className='col-1 col-align-self_center col-justify-self_end'>
			<Cart />
		</div>

		{/* Navigation */}
		<div className='col-2'>
			<Navigation pizzaTypes={pizzaTypes} selectedPizzaType={selectedPizzaType} choosingTheTypeOfPizza={(value) => onSelectPizzaType(value)} />
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