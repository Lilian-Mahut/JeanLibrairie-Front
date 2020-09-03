import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultContainer from '../books/ResultContainer'

export default ({ match }) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.dashboard.user)

	return (
		<div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Books to return</h3>
				{ 
					user.currentBorrowedBooks.length < 1 ? 
						<p>Aucun livre emprunté pour le moment</p>
					: <ResultContainer books={ user.currentBorrowedBooks } currentBorrow={ true } />
				}
			</div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Borrowed books</h3>
				{ 
					user.historyBorrowedBooks.length < 1 ? 
						<p>Aucun livre emprunté pour le moment</p>
					: <ResultContainer books={ user.historyBorrowedBooks } />
				}
			</div>
		</div>
	)
}