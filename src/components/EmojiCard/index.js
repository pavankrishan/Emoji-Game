const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={onClickCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
