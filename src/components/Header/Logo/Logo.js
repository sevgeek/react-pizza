import React from 'react'

/**
 * @name Logo
 * @description Функциональный компонент логотипа
 * @param {String} imagePath Путь к изображению логотипа
 */
const Logo = ({ path }) => (
	<div className='flexbox flex-align-items_center'>
		<img
			alt='Logo'
			src={path}
			width='120px'
			className='flex-item mr-m' />
		<h1 className='flex-item mr-m'>React Pizza <h5 className='txt-m m-0 p-0'>Реактивное веб-приложение интернет-магазина пиццы</h5></h1>
	</div>
)

export default Logo