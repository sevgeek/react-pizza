import React from 'react'

// Import components
import Cart from './Cart/Cart'

const Header = () => (
	<header className='grid grid-2-col grid-gap-0'>
		{/* Pizza Logo */}
		<div className='col-1'><h2><i className="em em-svg em-pizza"></i></h2></div>
		{/* Cart Button */}
		<Cart classes={['col-1', 'col-align-self_center', 'col-justify-self_end']} />
	</header>
)

export default Header