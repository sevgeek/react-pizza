import React from 'react'

/** Import components */
import { Link } from 'react-router-dom'

/**
 * @name CartButton
 * @description Функциональный компонент корзины заказа
 * @param {Array} cart Корзина заказа
 */
const CartButton = ({ cart = [] }) => {

	//  Количество заказанных пицц
	const orderedPizzas = cart.length > 0
		? <div className='flex-item cart-button_count'>{cart.length}</div>
		: null

	// Итоговая стоимость заказа
	const totalPrice = cart.reduce((total, pizza) => total + pizza.price, 0)

	return (
		<Link to='/cart'>
			<div className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
				<div className='flexbox'>
					{totalPrice > 0
						? <p className='flex-item cart-button_text'>{totalPrice} ₽</p>
						: <p className='flex-item cart-button_text'>Корзина</p>}
					{orderedPizzas}
				</div>
			</div>
		</Link>
	)
}

export default CartButton