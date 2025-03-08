import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<hello />
			<button onClick={() => setCount(count => count + 1)}>count is</button>
			<div className='btn'>
				<button onClick={() => setCount(count - 1)}>count is </button>
			</div>
			<div className='islam'>
				<h1>{count}</h1>
			</div>
		</>
	)
}

export default App
