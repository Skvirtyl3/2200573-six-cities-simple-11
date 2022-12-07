import { GALLERY_ITEMS_COUNT } from '../../const';

type GalleryProps = {
  images: string[];
}

function Gallery({images}:GalleryProps) : JSX.Element
{
  return(
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, GALLERY_ITEMS_COUNT).map((item) =>
          (
            <div key={item} className="property__image-wrapper">
              <img className="property__image" src={item} alt="" />
            </div>))}
      </div>
    </div>
  );
}

export default Gallery;
