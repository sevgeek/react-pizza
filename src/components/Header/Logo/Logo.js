import React from 'react'

const Logo = ({ imagePath }) => (
	<div className='flexbox flex-align-items_center'>
		<img
			alt='Logo'
			width='65px'
			src={imagePath}
			className='flex-item mr-xl' />
		<h1 className='flex-item mr-m'>React Pizza</h1>
		<p className='txt-m'>Реактивное веб-приложение интернет-магазина пиццы</p>
	</div>
)

export default Logo