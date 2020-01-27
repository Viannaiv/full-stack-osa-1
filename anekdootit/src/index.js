import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Header = ({text}) => (
    <>
        <h1>{text}</h1>
    </>
)

const App = (props) => {
    const [selected, setSelected] = useState(Math.floor(Math.random() * 6))
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

    const handleNextClick = () => {
        const select = Math.floor(Math.random() * 6)
        setSelected(select)
    }

    const handleVoteClick = () => {
        const copy = [...points]
        copy[selected] = copy[selected] + 1
        setPoints(copy)
    }

    const mostVotes = points.indexOf(Math.max(...points));

    return (
        <div>
            <Header text='Random anecdote' />
            <p>{props.anecdotes[selected]}</p>
            <p>This anecdote has {points[selected]} votes</p>
            <Button onClick={handleVoteClick} text='vote' />
            <Button onClick={handleNextClick} text='next anecdote' />
            <Header text='Anecdote with most votes' />
            <p>{props.anecdotes[mostVotes]}</p>
            <p>This anecdote has {points[mostVotes]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
