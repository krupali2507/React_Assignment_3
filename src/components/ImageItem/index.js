import './index.css'

const ImageItem = props => {
  const {ImageDetail} = props
  const {imageUrl} = ImageDetail

  return (
    <li className="image-thumbnail">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
    </li>
  )
}

export default ImageItem
