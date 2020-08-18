import React from 'react'

const Pizza = ({ pizzas, selectedPizzaType = 'all' }) => {
	return (
		<React.Fragment>
			{selectedPizzaType === 'all'
				? renderPizzas(pizzas)
				: renderPizzas(pizzas.filter((pizza) => pizza.type === selectedPizzaType))}
		</React.Fragment>
	)
}

const renderPizzas = data => data.map(({ type, img, title, content, price }, index) => (
	<div className='col-1'>
		<div key={`${type}_${index}`} className='pizza'>
			<img className='pizza-img mb-s' alt={title} src={img} />
			<p className='pizza-title txt-l mb-s'>{title}</p>
			<p className='pizza-content txt-m mb-xl'>{content.join(', ')}</p>
			<div className='flexbox flex-justify_between flex-align-items_center'>
				<p className='pizza-price flex-item txt-l'>от {price} ₽</p>
				<button className='pizza-order flex-item'>Выбрать</button>
			</div>
		</div>
	</div>
))

export default Pizza