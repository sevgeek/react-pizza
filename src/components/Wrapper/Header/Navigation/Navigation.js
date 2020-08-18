import React from 'react'

const Navigation = ({ links }) => {
	return (
		<ul className='navigation flexbox flex-justify_around'>
			{links.map((link) => {
				return (
					<li className="flex-item" key={`nav_${link}`}>{link}</li>
				)
			})}
		</ul>
	)
}

export default Navigation