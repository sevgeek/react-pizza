import React from 'react'
import { Link } from 'react-router-dom'

/** Redux */
import { connect } from 'react-redux'
import { selectPizzaType } from '../../redux/actions/actions'

/** Import components */
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
			{appLogo('/img/svg/react-pizza.svg')}
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
 * @name appLogo
 * @description Логотип
 * @param {String} path Путь к изображению логотипа
 */
const appLogo = (path) => (
	<Link to='/'>
		<div className='flexbox flex-align-items_center'>
			<img
				alt='Logo'
				src={path}
				width='120px'
				className='flex-item mr-m' />
			<div id='logo-text' className='flex-item'>
				<h1 className='mr-m'>REACT PIZZA</h1>
				<h5 className='txt-m m-0 p-0'>Реактивное веб-приложение для заказа пиццы</h5>
			</div>
		</div>
	</Link>
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