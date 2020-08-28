import React from 'react'

/** Import components */
import PizzaProps from '../Showcase/PizzaItem/PizzaProps/PizzaProps'

/** Function */
import transfromPizzaContentToText from '../../functions'

/**
 * @name CartItem
 * @description Функциональный компонент элемента корзины
 * @param {Object} data Объекты пиццы
 * @param {Function} onRemovePizzaFromCart Функция Redux, удаляющая пиццу из массива state.cart
 * @param {Function} selectProps Функция выбора свойства пиццы
 * @param {Function} upPizzaCount Функция поднятия состояния count к родителю
 */
const CartItem = ({ data, callBack, selectProps, upPizzaCount }) => {
	const { id, type, config, img, title, content, price, count: defaultCount } = data

	// Уникальный идентификатор пиццы
	const pizzaId = { id, type, count: defaultCount }

	// Текстовое представление
	let sizeText, doughText = undefined

	/** State: pizza props */
	const [pizzaProps, setPizzaProps] = React.useState({
		...pizzaId
	})

	/**
	 * @name onChangePizzaCount
	 * @description useCallback-хук изменения состояния (свойств пиццы)
	 * и отправки изменений родительскому компоненту в store
	 */
	const onChangePizzaCount = React.useCallback((value) => {
		const newState = {
			...pizzaProps,
			count: value
		}

		// Set new state
		setPizzaProps(newState)

		/** Up state to props `upPizzaCount` */
		upPizzaCount(newState)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pizzaProps])

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
			<div className='col-3 col-justify-self_center cart-list__item-desc'>
					<h4>{title}</h4>
					<p className='cart-list__config txt-s'>{sizeText}, {doughText}</p>
					<p className='txt-s'>{transfromPizzaContentToText(content.join(', '))}</p>

					{/* PizzaProps */}
					<div className='mt-s'>
						<PizzaProps
							config={config}
							pizza={pizzaId}
							selectProps={(props) => selectProps(props)} />
					</div>
			</div>

			{/* Price, count */}
			<div className='col-1'>
				<div className='grid grid-2-col grid-col-gap-0 grid-row-gap-s'>
					<h4 className='cart-list__price col-1 col-align-self_center'>{price * pizzaProps.count} ₽</h4>

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
							onClick={() => onChangePizzaCount(pizzaProps.count - 1)}
							disabled={pizzaProps.count <= 1 ? true : false}
							className='flex-item cart__count-button'> - </button>

						{/* Count */}
						<span className='flex-item cart__count'>{pizzaProps.count}</span>

						{/* Button incremented */}
						<button
							type='button'
							onClick={() => onChangePizzaCount(pizzaProps.count + 1)}
							className='flex-item cart__count-button'> + </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem