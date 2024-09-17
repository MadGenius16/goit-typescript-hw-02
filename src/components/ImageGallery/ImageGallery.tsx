import { ImageGalleryInterface } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items,onImageClick}: ImageGalleryInterface) {

    return (
        <ul className={css.container}>
          {items.map((item) => <li key={item.id}>
            <ImageCard item={item}
            onImageClick={onImageClick } />
          </li>) }
        </ul>
    )
}