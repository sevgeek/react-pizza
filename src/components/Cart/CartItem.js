import React from 'react'

/** Function */
import transfromPizzaContentToText from '../../functions'

/** Import components */
import PizzaProps from '../Showcase/PizzaItem/PizzaProps/PizzaProps'

/**
 * @name CartItem
 * @description Функциональный компонент элемента корзины
 * @param {Object} data Объекты пиццы
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая пиццу из массива state.cart
 * @param {Function} selectProps Функция выбора свойства пиццы
 * @param {Function} upPizzaCount Функция поднятия состояния count к родителю
 */
const CartItem = ({ data, callBack, selectProps, upPizzaCount }) => {
	// Получаем данные
	const { id, type, config, img, title, content, price, count: defaultCount } = data

	// Уникальный идентификатор пиццы
	const pizzaId = { id, type, count: defaultCount }

	// Текстовое представление
	let sizeText, doughText = undefined

	/** State: pizza count */
	const [count, setCount] = React.useState(defaultCount)

	/** Update count */
	const updateCount = value => {
		setCount(value)
		upPizzaCount({ ...pizzaId, count: value })
	}

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
		<div key={`${type}_${id}`} className='cart-list__item flex-item mt-m grid grid-5-col grid-gap-s'>
			{/* Pizza Image */}
			<img
				src={img}
				width='170'
				alt={title}
				className='col-1 col-align-self_center col-justify-self_center' />

			{/* Props */}
			<div className='col-3 col-justify-self_center'>
				<div style={{ width: '450px' }}>
					<h4>{title}</h4>

					<p className='cart-list__config txt-s'>{sizeText}, {doughText}</p>

					<p className='txt-s'>{transfromPizzaContentToText(content.join(', '))}</p>

					{/* PizzaProps */}
					<div style={{ marginTop: '12px' }}>
						<PizzaProps
							config={config}
							pizza={pizzaId}
							selectProps={(props) => selectProps(props)} />
					</div>
				</div>
			</div>

			{/* Price, count */}
			<div className='col-1'>
				<div className='grid grid-2-col grid-col-gap-0 grid-row-gap-s'>
					<h4 className='cart-list__price col-1 col-align-self_center'>{price * count} ₽</h4>

					<img
						alt='Удалить'
						src='/img/svg/trash.svg'
						title='Удалить из корзины'
						onClick={() => callBack(pizzaId)}
						className='cart-list__item-trash col-1 col-align-self_center col-justify-self_end' />

					<div className='col-2 flexbox flex-justify_around flex-align-items_center'>
						{/* Button decremented */}
						<button
							type='button'
							onClick={() => updateCount(count - 1)}
							disabled={count <= 1 ? true : false}
							className='flex-item cart__count-button'> - </button>

						{/* Count */}
						<span className='flex-item cart__count'>{count}</span>

						{/* Button incremented */}
						<button
							type='button'
							onClick={() => updateCount(count + 1)}
							className='flex-item cart__count-button'> + </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem