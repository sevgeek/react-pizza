import React from 'react'

// Import components
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Header = () => (
	<header className='grid grid-2-col grid-gap-0'>
		{/* Pizza Logo */}
		<div className='col-1 col-align-self_center col-justify-self_start'>
			<Logo imagePath='/img/svg/react-pizza-logo.svg' />
		</div>
		{/* Cart Button */}
		<div className='col-1 col-align-self_center col-justify-self_end'>
			<Cart />
		</div>
		{/* Navigation */}
		<div className='col-2'>
			<Navigation links={['all', 'meaty', 'chesee', 'vegetarian']} />
		</div>
	</header>
)

export default Header