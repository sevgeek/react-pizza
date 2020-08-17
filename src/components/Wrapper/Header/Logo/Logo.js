import React from 'react'
import classNames from 'classnames'

const Logo = ({ classes, imagePath }) => (
	<div className={classNames(classes)} >
		<img
			alt='Logo'
			width='85px'
			src={imagePath}
		/>
	</div >
)

export default Logo