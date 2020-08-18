import React from 'react'

const Pizza = () => {
	return (
		<div className='pizza col-1'>
			{/* Pizza Image */}
			<img className='pizza-img mb-s' alt='Пицца' src='https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dd59dcd5-cbf7-44e9-a5bd-1654ef06e6a3.jpg' />
			{/* Pizza Title */}
			<h4 className='pizza-title mb-s'>Ветчина и сыр</h4>
			{/* Pizza Content */}
			<p className='pizza-content txt-m mb-xl'>Ветчина, увеличенная порция моцареллы, сливочный соус</p>
			{/* Pizza Order */}
			<div className='flexbox flex-justify_between flex-align-items_center'>
				{/* Price */}
				<h4 className='pizza-price flex-item'>от 295 ₽</h4>
				{/* Order button */}
				<button className='pizza-order flex-item'>Выбрать</button>
			</div>
		</div>
	)
}

export default Pizza