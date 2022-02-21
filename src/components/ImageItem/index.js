import './index.css'

const ImageItem = props => {
  const {imageDetail, onClickMatchImage} = props
  const {id, thumbnailUrl} = imageDetail

  const onClickingImage = () => {
    onClickMatchImage(id)
  }

  return (
    <li className="image-thumbnail">
      <button type="button" onClick={onClickingImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
