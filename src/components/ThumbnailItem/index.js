// Write your code here.

import './index.css'

const ThumbNailItems = props => {
  const {imagesData, isActive, setActiveSelectImgId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesData
  const thumbNailApplyClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onclickGetReqImg = () => {
    setActiveSelectImgId(id)
  }

  return (
    <li className="select-thumbnail-image">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onclickGetReqImg}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbNailApplyClassName}
        />
      </button>
    </li>
  )
}
export default ThumbNailItems
