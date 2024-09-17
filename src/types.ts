export interface ImageInterface {
  id: string;
  urls: {
      small: string;
      regular: string;
  }
  alt_description: string;
}

export interface ImageCardInterface {
  item: ImageInterface;
  onImageClick: (alt: string, url: string) => void
}

export interface ImageGalleryInterface {
  items: ImageInterface[];
  onImageClick: (alt: string, url: string) => void
}

export interface ImagesModalInterface {
  isModalOpen: boolean;
  closeModal: () => void;
  targetPhoto: TargetPhotoInterface;
}

export interface TargetPhotoInterface {
  url: string;
  alt: string;
}

export interface OnSubmitinterface {
  onSubmit: (values: string) => void;
}

export interface LoadMoreInterface {
  loadMore: ()=>void
}