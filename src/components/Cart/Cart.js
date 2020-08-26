import React from 'react'

/** Redux */
import { connect } from 'react-redux'
// Import actions
import {
	orderCart,
	removePizzaFromCart,
	selectPizzaPropsInCart,
	changePizzaCountInCart,
} from '../../redux/actions/actions'

/** Import components */
import CartItem from './CartItem'

/**
 * @name Cart
 * @description Функциональный компонент корзины
 * @param {Array} cart Массив объектов (пицц) в корзине (state.cart)
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая объект (пиццу) из массива (state.cart)
 * @param {Function} selectProps Функция выбора свойства пиццы в корзине
 * @param {Function} orderCart Функция Redux, очищающая корзину после заказа
 * @param {Function} upPizzaCount Функция Redux, изменяющая количество пиццы в корзине
 */
const Cart = ({ cart, onRemovePizzaFromCart, selectProps, orderCart, upPizzaCount }) => {
	// Итоговая цена
	const totalPrice = cart.length > 0
		? cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)
		: 0

	/** State: статус заказа */
	const [ordered, setOrder] = React.useState(false)

	/**
	 * @name onOrderReg
	 * @description Функция изменения состояния (оформления заказа) и отправки изменений родительскому компоненту в store
	 */
	const onOrderReg = React.useCallback(() => {
		// Set new state
		setOrder((value) => !value)

		/** Callback-function: очистка корзины */
		orderCart()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ordered])

	// DOM-node: кнопка завершения заказа
	const orderButton = cart.length > 0
		? <button
			onClick={() => onOrderReg()}
			className='cart-order flex-item p-s'>Заказать</button>
		: <button
			className='cart-order flex-item p-s'
			style={
				{
					color: 'rgba(255, 255, 255, 0.5)',
					backgroundColor: 'rgb(246, 172, 119)'
				}
			}>Заказать</button>

	// DOM-node: заказ пустой
	const emptyCart = <React.Fragment>
		{cart.length > 0
			? cart.map((item, index) =>
				<CartItem
					key={index}
					data={item}
					selectProps={selectProps}
					callBack={onRemovePizzaFromCart}
					upPizzaCount={(props) => upPizzaCount(props)} />)
			: <p className='txt-m mt-m'>Добавьте что-нибудь из меню.</p>}

		<div className='flexbox flex-justify_between flex-align-items_center mt-m'>
			<h4 className='cart__total-price flex-item'>Сумма заказа: <span>{totalPrice}</span> ₽</h4>

			{/* Вывод кнопки заказа */}
			{totalPrice > 0 ? orderButton : null}
		</div>
	</React.Fragment>

	// DOM-node: заказ оформлен
	const orderedCart =
		<div className='flex-align-items_center flex-justify_around flexbox'>
			<p className='flex-item txt-m mt-m'>Спасибо за Ваш заказ!<br />Ваша пицца уже в пути! <span style={{ color: 'rgb(171, 173, 186)' }}>(но это не точно)</span></p>
			<img className='flex-item' src='/img/svg/delivery.svg' width='350px' alt='Delivery' />
		</div>

	return (
		<section className='cart'>
			<h2 className='cart_title'>Корзина</h2>

			{/* Вывод DOM-nodes */}
			{!ordered
				? emptyCart
				: orderedCart}
		</section>
	)
}

/**
 * @name mapStateToProps
 * @description Преобразование state в props
 * @param {Array} cart Массив всех пицц из корзины
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
	orderCart: () => dispatch(orderCart()),
	selectProps: props => dispatch(selectPizzaPropsInCart(props)),
	upPizzaCount: props => dispatch(changePizzaCountInCart(props)),
	onRemovePizzaFromCart: props => dispatch(removePizzaFromCart(props))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)