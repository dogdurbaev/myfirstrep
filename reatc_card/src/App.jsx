import React, { useState } from 'react'
import './App.scss'

export default function App() {
	const [newCard, setNewCard] = useState(false)

	const [cardName, setCardName] = useState('Jane Appleseed')
	const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
	const [cardMonth, setCardMonth] = useState('00')
	const [cardYear, setCardYear] = useState('00')
	const [cardCvc, setCardCvc] = useState('000')

	const [nameError, setNameError] = useState('')
	const [numberError, setNumberError] = useState('')
	const [dateError, setDateError] = useState('')
	const [cvcError, setCvcError] = useState('')

	const cardNameRegExp = /^[A-Za-z\sА-Яа-я]+$/
	const cardNumberRegExp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
	const cardCvcRegExp = /^\d{3}$/
	const cardMonthRegExp = /^(0[1-9]|1[0-2])$/

	const handleInputName = event => {
		const { value } = event.target
		setCardName(value)

		if (cardNameRegExp.test(value)) {
			setNameError('')
		} else {
			setNameError('Имя карты должно содержать только буквы и пробелы')
		}
	}
	const handleInputNumber = event => {
		const { value } = event.target
		setCardNumber(value)

		if (cardNumberRegExp.test(value)) {
			setNumberError('')
		} else {
			setNumberError('Имя карты должно содержать только буквы и пробелы')
		}
	}
	const handleInputMonth = event => {
		const { value } = event.target
		setCardMonth(value)

		if (cardMonthRegExp.test(value)) {
			setDateError('')
		} else {
			setDateError('Имя карты должно содержать только буквы и пробелы')
		}
	}
	const handleInputYear = event => {
		const { value } = event.target
		setCardYear(value)
	}
	const handleInputCvc = event => {
		const { value } = event.target
		setCardCvc(value)

		if (cardCvcRegExp.test(value)) {
			setCvcError('')
		} else {
			setCvcError('Имя карты должно содержать только буквы и пробелы')
		}
	}

	const handleNewCard = event => {
		// event.preventDefault()
		if (!nameError && !numberError && !dateError && !cvcError) {
			setNewCard(true)
		} else {
			setNewCard(false)
		}
	}

	return (
		<div className='cardDeteils'>
			<section className='cardData'>
				<div className='cardFront'>
					<div className='circles'>
						<div className='circle'>
							<div className='circleNow'></div>
						</div>
					</div>
					<div className='cardData'>
						<p>{cardNumber}</p>
						<div className='cardName'></div>
						<h6>{cardName}</h6>
						<h6>
							{cardMonth}
							{cardYear}
						</h6>
					</div>
				</div>
				<div className='cardBack'>
					<p>{cardCvc}</p>
				</div>
			</section>
			{newCard ? (
				<div className='newCard'>
					<div className='circle'></div>
					<h2>Thank you</h2>
					<p>we are added your card details</p>
					<button>continue</button>
				</div>
			) : (
				<form onSubmit={handleNewCard} className='cardNewData'>
					<label htmlFor='cardName'>CARDHOLDER NAME</label>
					<input
						id='cardName'
						maxLength={30}
						onChange={handleInputName}
						type='text'
						placeholder='e.g. Jane Appleseed'
						required
					/>
					{nameError && (
						<span className='errorMessage' style={{ color: 'red' }}>
							{nameError}
						</span>
					)}
					<label htmlFor='cardNumber'>CARD NUMBER</label>
					<input
						id='cardNumber'
						maxLength={19}
						onChange={handleInputNumber}
						type='text'
						placeholder='e.g. 1234 5678 9123 0000'
						required
					/>
					{numberError && (
						<span className='errorMessage' style={{ color: 'red' }}>
							{numberError}
						</span>
					)}

					<label htmlFor='cardMMYY'>
						EXP. DATE (MM/YY){' '}
						<label htmlFor='cardCvc' className='cvcText'>
							CVC
						</label>
					</label>
					<div>
						<input
							id='cardMMYY'
							maxLength={2}
							onChange={handleInputMonth}
							type='text'
							placeholder='MM'
							className='smallInput'
							required
						/>
						<input
							id='cardMMYY'
							maxLength={2}
							onChange={handleInputYear}
							type='text'
							placeholder='YY'
							className='smallInput'
							required
						/>
						{dateError && (
							<span
								className='errorMessage errorMessage2'
								style={{ color: 'red' }}
							>
								{dateError}
							</span>
						)}
						<input
							id='cardCvc'
							maxLength={3}
							onChange={handleInputCvc}
							type='text'
							placeholder='e.g. 123'
							className='mediumInput'
							required
						/>
						{cvcError && (
							<span
								className='errorMessage errorMessage2'
								style={{ color: 'red' }}
							>
								{cvcError}
							</span>
						)}
					</div>
					<button type='submit'>Confirm</button>
				</form>
			)}
		</div>
	)
}
