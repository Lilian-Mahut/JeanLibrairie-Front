import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import api from "../../utils/api"

export default ({ match }) => {
	let bookSlug = match.params.bookSlug
	let [book, setBook] = useState(null)

    useEffect(() => {
		api
			.get(`/books/${bookSlug}`)
			.then(response => setBook(response.data.data[0]))
			.catch(error => console.log(error))
    }, [bookSlug])

	return (
		<div>
			{book ? (
				<div className='bookContainer'>
					<div className='left'>
						<h1>
							<b>{book.title}</b>
						</h1>
						<h5>
							<b>{book.publication ? book.publication.substring(0, 4) : "/"}</b>
						</h5>
						<h3>
							<b>Resume</b>
						</h3>
						<p></p>
						image
						<h3>
							<b>Author information</b>
						</h3>
						<p>{book.author}</p>
						<p></p>
					</div>
					<div className='right'>
						<div
							className='BookResultView'
							style={{ backgroundImage: `url(${book.image})` }}
						/>
					</div>
				</div>
			) : (
				<p>Initialization</p>
			)}
		</div>
	)
}
