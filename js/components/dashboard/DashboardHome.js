import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default ({ match }) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.dashboard.user)

	return (
		<div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Books to return</h3>
				<div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
					{ 
						user.currentBorrowedBooks.length < 1 ? 
							'Aucun livre emprunté pour le moment'
						: user.currentBorrowedBooks.map((book, i) =>(
							<div key={ i }>	
								<p>{ book.title }</p>
								<div>Return</div>
							</div>
						))
					}
				</div>
			</div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Borrowed books</h3>
				<div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
					{ 
						user.historyBorrowedBooks.length < 1 ? 
							'Aucun livre emprunté pour le moment'
						: user.historyBorrowedBooks.map((book, i) =>(
							<div key={ i }>	
								<p>{ book.title }</p>
								<p>{ book.returned && book.returned.substring(0, 10) }</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}