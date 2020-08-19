import React from 'react'

const PizzaConfig = ({ config }) => {
	return (
		<React.Fragment>
			<section className='mb-xs'>
				<div className='pizza-config grid grid-3-col grid-row-gap-0 grid-col-gap-xs'>
					<div className='pizza-config_value col-1 selected'>Маленькая</div>
					<div className='pizza-config_value col-1'>Средняя</div>
					<div className='pizza-config_value col-1'>Большая</div>
				</div>
			</section>
			<section className='mb-m'>
				<div className='pizza-config grid grid-2-col grid-row-gap-0 grid-col-gap-xs'>
					<div className='pizza-config_value col-1 selected'>Традиционное</div>
					<div className='pizza-config_value col-1'>Тонкое</div>
				</div>
			</section>
		</React.Fragment>
	)
}

export default PizzaConfig