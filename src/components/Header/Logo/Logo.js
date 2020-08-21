import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @name Logo
 * @description Функциональный компонент логотипа
 * @param {String} imagePath Путь к изображению логотипа
 */
const Logo = ({ path }) => (
	<Link to='/'>
		<div className='flexbox flex-align-items_center'>
			<img
				alt='Logo'
				src={path}
				width='120px'
				className='flex-item mr-m' />
			<div className='flex-item'>
				<h1 className='mr-m'>React Pizza</h1>
				<h5 className='txt-m m-0 p-0'>Реактивное веб-приложение интернет-магазина пиццы</h5>
			</div>
		</div>
	</Link>
)

export default Logo