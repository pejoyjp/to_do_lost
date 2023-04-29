import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.less'
import './styles/light.css'
import './styles/dark.css'
import initLang from './utils/momentI18n.js'

initLang()
ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
		<App />
	// </React.StrictMode>
)

if (import.meta.env.PROD) {
	document.oncontextmenu = function () {
		return false
	}
}
