import React from 'react'

/**
 * @name Logo
 * @description Функциональный компонент отображения логотипа
 * @param {String} imagePath Путь к изображению логотипа
 */
const Logo = ({ path }) => (
	<div className='flexbox flex-align-items_center'>
		<img
			alt='Logo'
			width='120px'
			src={path}
			className='flex-item mr-m' />
		<h1 className='flex-item mr-m'>React Pizza</h1>
		<p className='txt-m'>Реактивное веб-приложение интернет-магазина пиццы</p>
	</div>
)

export default Logo