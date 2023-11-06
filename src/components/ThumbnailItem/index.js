// Write your code here.
const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveUpdate} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveUpdate(id)
  }

  return (
    <li className="list-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
