import React from 'react'

const Logo = ({ imagePath }) => (
	<React.Fragment>
		<img
			alt='Logo'
			width='125px'
			src={imagePath}
		/>
	</React.Fragment>
)

export default Logo