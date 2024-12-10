/*Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isGameOver: false,
  }

  shuffleEmojis = emojisList => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = finalScore => {
    this.setState(prevState => ({
      isGameOver: true,
      score: finalScore === this.props.emojisList.length ? 12 : finalScore,
      topScore: Math.max(prevState.topScore, finalScore),
    }))
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      } else {
        this.setState(prevState => ({
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          score: prevState.score + 1,
        }))
      }
    }
  }

  restartGame = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameOver: false,
    })
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffleEmojis([...emojisList])

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {isGameOver ? (
          <WinOrLoseCard score={score} onClickPlayAgain={this.restartGame} />
        ) : (
          <ul className="emojis-container">
            {shuffledEmojisList.map(emoji => (
              <EmojiCard
                key={emoji.id}
                emojiDetails={emoji}
                onClickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
