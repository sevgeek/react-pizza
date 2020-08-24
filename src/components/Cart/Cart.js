import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { removePizzaFromCart } from '../../redux/actions/actions'

/** Function */
import transfromPizzaContentToText from '../../functions'

const Cart = ({ cart, onRemovePizzaFromCart }) => {

	// Итоговая цена
	const totalPrice = cart.length > 0 ? cart.reduce((total, pizza) => total + pizza.price, 0) : 0

	const orderButton = cart.length > 0
		? <button className='cart-order flex-item p-s'>Заказать</button>
		: <button className='cart-order flex-item p-s' style={{ backgroundColor: 'rgb(246, 172, 119)', color: 'rgba(255, 255, 255, 0.5)' }}>Заказать</button>

	return (
		<section className='cart'>
			<h2 className='cart_title'>Корзина</h2>

			{cart.length > 0
				? renderCartItems(cart, onRemovePizzaFromCart)
				: <p className='txt-m mt-m'>Добавьте что-нибудь из меню.</p>}

			<div className='flexbox flex-justify_between flex-align-items_center mt-m'>
				<h4 className='cart__total-price flex-item'>Сумма заказа: <span>{totalPrice}</span> ₽</h4>
				{orderButton}
			</div>


		</section>
	)
}

const renderCartItems = (data, onRemovePizzaFromCart) => data.map(({ id, type, config, img, title, content, price }) => {
	let size = undefined
	let dough = undefined
	let pizzaId = { id, type }

	// Switch size
	switch (config.size) {
		case 'small':
			size = 'Маленькая 25 см'
			break;

		case 'medium':
			size = 'Средняя 35 см'
			break;

		case 'big':
			size = 'Большая 45 см'
			break;

		default:
			size = 'Маленькая 25 см'
			break;
	}

	// Switch dough
	switch (config.dough) {
		case 'standart':
			dough = 'традиционное тесто'
			break;

		case 'thin':
			dough = 'тонкое тесто'
			break;

		default:
			dough = 'традиционное тесто'
			break;
	}

	return (
		<div key={`${type}_${id}`} className='cart-list__item flex-item mt-m grid grid-5-col grid-gap-xs'>
			<img className='col-1 col-align-self_center col-justify-self_center' width='100' src={img} alt={title} />
			<div className='col-3'>
				<h4>{title}</h4>
				<p className='cart-list__config txt-s mb-xs'>{size}, {dough}</p>
				<p className='txt-s'>{transfromPizzaContentToText(content.join(', '))}</p>
			</div>
			<div className='col-1 flexbox flex-justify_between'>
				<h4 className='cart-list__price flex-item'>{price} ₽</h4>
				<img
					alt='Удалить'
					src='/img/svg/trash.svg'
					title='Удалить из корзины'
					className='cart-list__item-trash'
					onClick={() => onRemovePizzaFromCart(pizzaId)}
				/>
			</div>
		</div>
	)
})

/**
 * @name mapStateToProps
 * @description Преобразование state в props
 * @param {Array} pizzas Массив всех пицц
 * @param {String} selectedPizzaType Выбранный тип пицц
 */
const mapStateToProps = ({ cart }) => ({
	cart
})

/**
 * @name mapDispatchToProps
 * @description Преобразование dispatch в props
 * @param {Object} dispatch
 */
const mapDispatchToProps = dispatch => ({
	onRemovePizzaFromCart: props => dispatch(removePizzaFromCart(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)