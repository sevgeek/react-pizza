import React from 'react'

/** Redux */
import { connect } from 'react-redux'

/** Import components */
import Pizza from './Pizza/Pizza'

const Main = ({ pizzas }) => {
	return (
		<section className='grid grid-4-col grid-gap-xl'>
			<Pizza />
		</section>
	)
}

/**
 * mapStateToProps
 * @name mapStateToProps
 * @description Преобразование состояния из хранилища в props
 * @param {Object} mapStateToProps Массив всех пицц
 */
const mapStateToProps = ({ pizzas }) => ({
	pizzas
})

export default connect(mapStateToProps)(Main)