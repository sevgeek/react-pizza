import React from 'react'

/** Import components */
import { Link } from 'react-router-dom'

/**
 * @name CartButton
 * @description Функциональный компонент корзины заказа
 * @param {Array} cart Корзина заказа
 */
const CartButton = ({ cart = [] }) => {

	let totalPrice, buttonCartText

	if (cart.length > 0) {
		// Определяем количество пицц в заказе
		totalPrice = (
			<div className='flex-item cart-button_count'>
				{cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)}&nbsp;₽
			</div>
		)

		// Определяем итоговую стоимость и формируем DOM-узел
		buttonCartText = <p className='flex-item cart-button_text'>Корзина</p>
	} else {
		totalPrice = null
		buttonCartText = <p className='flex-item cart-button_text'>Корзина</p>
	}

	return (
		<Link to='/cart'>
			<div className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
				<div className='flexbox'>
					{buttonCartText}
					{totalPrice}
				</div>
			</div>
		</Link>
	)
}

export default CartButton