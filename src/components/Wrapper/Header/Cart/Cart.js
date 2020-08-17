import React from 'react'
import classNames from 'classnames'

const Cart = ({ classes }) => {
	return (
		<div className={classNames(classes, 'cart')}>
			<button className='cart-button p-m'>Корзина</button>
		</div>
	)
}

export default Cart