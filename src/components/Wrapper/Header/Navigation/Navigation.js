import React from 'react'

const Navigation = ({ pizzaTypes }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{pizzaTypes.map((type, index) => {
				return (
					<li className="flex-item" key={`pizzaType_${index}`}>{type.title}</li>
				)
			})}
		</ul>
	)
}

export default Navigation