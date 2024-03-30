// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbItem, changeImage, activeTabId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbItem

  const imageClicked = () => {
    changeImage(id)
  }
  const setOpacity = activeTabId === id ? 'opacity-zero' : ''
  return (
    <li>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumb-image-sizing ${setOpacity}`}
          onClick={imageClicked}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
