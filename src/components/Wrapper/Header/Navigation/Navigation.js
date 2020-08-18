import React from 'react'

const Navigation = ({ pizzaTypes }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{pizzaTypes.map((type, index) => {
				return (
					<li
						key={`pizzaType_${index}`}
						className="flex-item txt-m"
					><i className={`em ${type.emoji} mr-m`}></i>{type.title}</li>
				)
			})}
		</ul>
	)
}

export default Navigation