import React from 'react'

/** Function */
import transfromPizzaContentToText from '../../functions'

/**
 * @name CartItem
 * @description Функциональный компонент элемента корзины
 * @param {Object} data Объекты пиццы
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая пиццу из массива state.cart
 */
const CartItem = ({ data, callBack }) => {
	const { id, type, config, img, title, content, price } = data
	const pizzaId = { id, type }
	let sizeText, doughText = undefined

	// Switch size
	switch (config.size) {
		case 'small':
			sizeText = 'Маленькая 25 см'
			break;

		case 'medium':
			sizeText = 'Средняя 35 см'
			break;

		case 'big':
			sizeText = 'Большая 45 см'
			break;

		default:
			sizeText = 'Маленькая 25 см'
			break;
	}

	// Switch dough
	switch (config.dough) {
		case 'standart':
			doughText = 'традиционное тесто'
			break;

		case 'thin':
			doughText = 'тонкое тесто'
			break;

		default:
			doughText = 'традиционное тесто'
			break;
	}

	return (
		<div key={`${type}_${id}`} className='cart-list__item flex-item mt-m grid grid-5-col grid-gap-xs'>
			<img className='col-1 col-align-self_center col-justify-self_center' width='100' src={img} alt={title} />
			<div className='col-3'>
				<h4>{title}</h4>
				<p className='cart-list__config txt-s'>{sizeText}, {doughText}</p>
				<p className='txt-s'>{transfromPizzaContentToText(content.join(', '))}</p>
			</div>
			<div className='col-1 flexbox flex-justify_between'>
				<h4 className='cart-list__price flex-item'>{price} ₽</h4>
				<img
					alt='Удалить'
					src='/img/svg/trash.svg'
					title='Удалить из корзины'
					className='cart-list__item-trash'
					onClick={() => callBack(pizzaId)}
				/>
			</div>
		</div>
	)
}

export default CartItem