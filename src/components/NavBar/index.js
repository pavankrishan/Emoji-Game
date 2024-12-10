import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
