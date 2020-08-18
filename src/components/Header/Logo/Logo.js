import React from 'react'

const Logo = ({ imagePath }) => (
	<div className='flexbox flex-align-items_center'>
		<img
			alt='Logo'
			width='65px'
			src={imagePath}
			className='flex-item mr-xl' />
		<h1 className='flex-item'>React Pizza</h1>
	</div>
)

export default Logo