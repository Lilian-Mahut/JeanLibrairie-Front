import React, { useEffect, useState } from 'react'
import axios from "../../utils/api"

export default ({ match }) => {
	return (
		<div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Books to return</h3>
				<div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
					{

					}
				</div>
			</div>
			<div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
				<h3>Borrowed books</h3>
				<div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
				</div>
			</div>
		</div>
	)
}