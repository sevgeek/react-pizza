import React from 'react'

// Import components
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'

const Header = () => (
	<header className='grid grid-2-col grid-gap-0'>
		{/* Pizza Logo */}
		<Logo
			classes='col-1'
			imagePath='/img/svg/react-pizza-logo.svg' />

		{/* Cart Button */}
		<Cart classes={['col-1', 'col-align-self_center', 'col-justify-self_end']} />
	</header>
)

export default Header