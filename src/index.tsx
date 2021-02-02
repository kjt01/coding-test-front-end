import React from 'react'
import ReactDOM from 'react-dom'

import '@assets/styles/common.css'
import reportWebVitals from './reportWebVitals'

import { RootApp } from '@modules/Root'

ReactDOM.render(
	<React.StrictMode>
		<RootApp />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
