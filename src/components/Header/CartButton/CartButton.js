import React from 'react'

/** Import components */
import { Link } from 'react-router-dom'

/**
 * @name CartButton
 * @description Функциональный компонент корзины заказа
 * @param {Array} cart Корзина заказа
 */
const CartButton = ({ cart = [] }) => {

	let orderedPizzas, totalPrice, totalPriceNode = undefined

	if (cart.length > 0) {
		// Определяем количество пицц в заказе
		orderedPizzas = <div className='flex-item cart-button_count'>{cart.length}</div>
		// Определяем итоговую стоимость и формируем DOM-узел
		totalPrice = cart.reduce((total, pizza) => total + pizza.price, 0)
		totalPriceNode = <p className='flex-item cart-button_text'>{totalPrice} ₽</p>
	} else {
		orderedPizzas = null
		totalPriceNode = <p className='flex-item cart-button_text'>Корзина</p>
	}

	return (
		<Link to='/cart'>
			<div className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
				<div className='flexbox'>
					{totalPriceNode}
					{orderedPizzas}
				</div>
			</div>
		</Link>
	)
}

export default CartButton