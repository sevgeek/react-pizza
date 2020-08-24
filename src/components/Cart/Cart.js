import React from 'react'

/** Redux */
import { connect } from 'react-redux'
import { removePizzaFromCart } from '../../redux/actions/actions'

/** Import components */
import CartItem from './CartItem'

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
				? cart.map(item => <CartItem data={item} callBack={onRemovePizzaFromCart} />)
				: <p className='txt-m mt-m'>Добавьте что-нибудь из меню.</p>}

			<div className='flexbox flex-justify_between flex-align-items_center mt-m'>
				<h4 className='cart__total-price flex-item'>Сумма заказа: <span>{totalPrice}</span> ₽</h4>
				{totalPrice > 0 ? orderButton : null}
			</div>
		</section>
	)
}

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