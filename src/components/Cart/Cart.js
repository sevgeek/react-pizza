import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { removePizzaFromCart } from '../../redux/actions/actions'

/** Function */
import transfromPizzaContentToText from '../../functions'

/**
 * @name Cart
 * @description Функциональный компонент корзины
 * @param {Array} cart Массив объектов (пицц) в корзине (state.cart)
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая объект (пиццу) из массива (state.cart)
 */
const Cart = ({ cart, onRemovePizzaFromCart }) => {
	// Итоговая цена
	const totalPrice = cart.length > 0 ? cart.reduce((total, pizza) => total + pizza.price, 0) : 0

	// DOM-узел кнопки завершения заказа
	const orderButton = cart.length > 0
		? <button className='cart-order flex-item p-s'>Заказать</button>
		: <button className='cart-order flex-item p-s' style={
			{
				color: 'rgba(255, 255, 255, 0.5)',
				backgroundColor: 'rgb(246, 172, 119)',
			}}>Заказать</button>

	return (
		<section className='cart'>
			<h2 className='cart_title'>Корзина</h2>

			{cart.length > 0
				? renderCartItems(cart, onRemovePizzaFromCart)
				: <p className='txt-m mt-m'>Добавьте что-нибудь из меню.</p>}

			<div className='flexbox flex-justify_between flex-align-items_center mt-m'>
				<h4 className='cart__total-price flex-item'>Сумма заказа: <span>{totalPrice}</span> ₽</h4>
				{totalPrice > 0 ? orderButton : null}
			</div>
		</section>
	)
}

/**
 * @name renderCartItems
 * @description Функция рендера элементов корзины
 * @param {Array} data Массив объектов (пицц) в корзине (state.cart)
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая объект (пиццу) из массива (state.cart)
 * @returns DOM-nodes
 */
const renderCartItems = (data, onRemovePizzaFromCart) => data.map(({ id, type, config, img, title, content, price }) => {
	let pizzaId = { id, type }
	let size, dough = undefined

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
				<p className='cart-list__config txt-s'>{size}, {dough}</p>
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