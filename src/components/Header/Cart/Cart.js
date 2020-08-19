import React from 'react'

/**
 * @name Cart
 * @description Функциональный компонент корзины заказа
 */
const Cart = () => (
	<React.Fragment>
		<button className='cart-button pt-xs pb-xs pr-s pl-s txt-m'>
			<img src='/img/svg/cart.svg' alt='Cart' width='25' />
		</button>
	</React.Fragment>
)

export default Cart