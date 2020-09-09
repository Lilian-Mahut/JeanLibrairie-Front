import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import api from "../../utils/api"
import Button from "../../components/divers/Button"

export default ({ match, nextBorrow }) => {
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
							<b>
								Published in{" "}
								{book.publication ? book.publication.substring(0, 4) : "/"}
							</b>
						</h5>
						<div>
							<h3>
								<b>Resume</b>
							</h3>
							<p></p>
						</div>
						<div>
							<h3>
								<b>Author information</b>
							</h3>
							<i>
								{book.authors.length > 0 &&
									book.authors
										.map(author => author.name)
										.reduce((acc, cur) => `${acc}, ${cur}`)}
							</i>
						</div>
						{nextBorrow && (
							<div className='borrowButton'>
								<Button
									text='Borrow'
									small={true}
									onClick={() => returnBook(book.id)}
								/>
							</div>
						)}
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
