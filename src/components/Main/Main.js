import React from 'react'

/** Redux */
import { connect } from 'react-redux'

const Main = ({ pizzas }) => {
	return (
		<main>

		</main>
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