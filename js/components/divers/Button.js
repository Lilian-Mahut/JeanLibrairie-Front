import React from 'react'
import './Button.scss'

export default ({ onClick, text = "Ok", small = false }) => {
	return (
		<div className={ `Button${small ? ' small' : ''}` } onClick={ onClick }>
			<p>{ text }</p>
		</div>
	)
}