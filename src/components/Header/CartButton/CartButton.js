import React from 'react'

/**
 * @name CartButton
 * @description Функциональный компонент корзины заказа
 * @param {Array} cart Корзина заказа
 */
const CartButton = ({ cart = [] }) => {
	let orderCountNode = cart.length > 0
		? <div className='flex-item cart-count'>{cart.length}</div>
		: null

	return (
		<div className='cart'>
			<button className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
				<div className='flexbox'>
					<p className='flex-item cart-text'>Корзина</p>
					{orderCountNode}
				</div>
			</button>
		</div>
	)
}

export default CartButton