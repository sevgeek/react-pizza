import React from 'react'

const Pizza = ({ pizzas }) => {
	return (
		<React.Fragment>
			{renderPizzas(pizzas.meaty, pizzas[0])}
			{renderPizzas(pizzas.chesee, pizzas[1])}
			{renderPizzas(pizzas.spicy, pizzas[3])}
		</React.Fragment>
	)
}

const renderPizzas = (data, type) => data.map((pizza, index) => (
	<div className='col-1'>
		<div key={`${type}_${index}`} className='pizza'>
			<img className='pizza-img mb-s' alt={pizza.title} src={pizza.img} />
			<p className='pizza-title txt-l mb-s'>{pizza.title}</p>
			<p className='pizza-content txt-m mb-xl'>{pizza.content.join(', ')}</p>
			<div className='flexbox flex-justify_between flex-align-items_center'>
				<p className='pizza-price flex-item txt-l'>от {pizza.price} ₽</p>
				<button className='pizza-order flex-item'>Выбрать</button>
			</div>
		</div>
	</div>
))

export default Pizza