import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  const isWin = score === 12

  return (
    <div className="win-or-lose-card">
      <div className="result-text-container">
        <h1 className="result-heading">{isWin ? 'You Won' : 'You Lose'}</h1>
        <p className="result-score-label">{isWin ? 'Best Score' : 'Score'}</p>
        <p className="result-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="result-image-container">
        <img
          src={
            isWin
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
          className="result-image"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
