import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (
    <>
        <h1>{text}</h1>
    </>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => (
    <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <>
            <Header  text='Give feedback' />
            <Button onClick={handleGoodClick} text='Good' />
            <Button onClick={handleNeutralClick} text='Neutral' />
            <Button onClick={handleBadClick} text='Bad' />
            <Header text='Statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
