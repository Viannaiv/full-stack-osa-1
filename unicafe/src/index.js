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

const StatisticLine = ({text, value}) => (
    <>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    </>
)

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    
    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    const average = (good - bad) / all
    const positive = ''.concat(good / all * 100).concat(' %')

    return (
        <>
            <table>
                <tbody>
                    <StatisticLine text='Good' value={good} />
                    <StatisticLine text='Neutral' value={neutral} />
                    <StatisticLine text='Bad' value={bad} />
                    <StatisticLine text='All' value={all} />
                    <StatisticLine text='Average' value={average} />
                    <StatisticLine text='Positive' value={positive} />
                </tbody>
            </table>  
        </>
    )   
}

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
