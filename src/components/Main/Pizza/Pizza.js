import React from 'react'

const Pizza = ({ pizzas }) => {
	return (
		<React.Fragment>
			{meatyPizzas(pizzas.meaty)}
		</React.Fragment>
	)
}

const meatyPizzas = data => data.map((pizza, index) => (
	<div key={`meaty_${index}`} className='pizza col-1'>
		<img className='pizza-img mb-s' alt={pizza.title} src={pizza.img} />
		<h4 className='pizza-title mb-s'>{pizza.title}</h4>
		<p className='pizza-content txt-m mb-xl'>{pizza.content.join(', ')}</p>
		<div className='flexbox flex-justify_between flex-align-items_center'>
			<h4 className='pizza-price flex-item'>от {pizza.price} ₽</h4>
			<button className='pizza-order flex-item'>Выбрать</button>
		</div>
	</div>
))

export default Pizza