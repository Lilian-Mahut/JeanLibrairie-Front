import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../divers/Button'
import axios from '../../utils/api'

import './Books.scss'

export default ({ books, currentBorrow = false }) => {
	const dispatch = useDispatch()
	const returnBook = id => {
		axios.put(`user/return/${id}`)
		.then(() => dispatch({ type: "FETCH_DASHBOARD_USER" }))
		.catch(err => console.error(err))
	}

	return(
		<React.Fragment>
			{ books.map((book, i) => 
				<div key={ i } className="BookResult">
					<div className="BookResultCadre">
						<div className="BookResultView" style={ { backgroundImage: `url(${book.image})` } } />
					</div>
					<h3>{ book.title }</h3>
					<i>{ book.authors.length > 0 && book.authors.map((author) => author.name).reduce((acc, cur) => `${ acc }, ${ cur }`) }</i>
					<div className="info">
						<div className="genre">
							{ book.categories.length > 0 && book.categories.map((category, j) => (
								<span key={ j }>{ category.slug }</span>
							)) }
						</div>
						<div className="publish">
							<p>Published in { book.publication? book.publication.substring(0, 4) : '/' }</p>
						</div>
						{ currentBorrow && 
							<div className="ReturnButton">
								<Button 
									text="Return" 
									small={ true } 
									onClick={ () => returnBook(book.id) }
								/>
							</div>
						}
					</div>
				</div>
			) }
		</React.Fragment>
	)
}
