import React from 'react'
import Books from './Books'
import './ResultContainer.scss'
import { useSelector } from 'react-redux'

export default ({ books, currentBorrow = false }) => {
	const role = useSelector(state => state.auth.role)
	return(
		<div className={ `ResultSection${(null !== role)? ' small' : ''}` }>
			{ books.length > 0 && <Books books={ books } currentBorrow={ currentBorrow } /> }
		</div>
	)
}