import { ImageCardInterface } from "../../types"
import css from "./ImageCard.module.css"

const ImageCard = ({ item: { urls: { small, regular}, alt_description}, onImageClick }: ImageCardInterface) => {
  return (
    <div className={css.container}>
       <img onClick={()=>onImageClick(alt_description, regular)} className={css.image} src={small} alt={alt_description} />
    </div>
  )
}

export default ImageCard