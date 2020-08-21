import React from 'react'

/** Import components */
import { Link } from 'react-router-dom'

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
		<Link to='/cart'>
			<div className='cart'>
				<div className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
					<div className='flexbox'>
						<p className='flex-item cart-text'>Корзина</p>
						{orderCountNode}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CartButton