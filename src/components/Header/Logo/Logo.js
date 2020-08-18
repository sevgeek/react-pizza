import React from 'react'

/**
 * @name Logo
 * @description Функциональный компонент отображения логотипа
 * @param {String} imagePath Путь к изображению логотипа
 */
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