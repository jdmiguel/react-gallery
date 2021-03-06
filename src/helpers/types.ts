export type ImageData = {
  id: number;
  thumbSrc: string;
  largeSrc: string;
  title: string;
  views: number;
  downloads: number;
  likes: number;
}
export type ImagesData = ImageData[];

export type ImageExtendedData = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}
export type ImagesExtendedData = ImageExtendedData[];