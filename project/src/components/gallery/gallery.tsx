function Gallery() : JSX.Element
{
  return(
    <div className="property__gallery-container container">
      <div className="property__gallery">
        <div className="property__image-wrapper">
          <img className="property__image" src="img/room.jpg" alt="" />
        </div>
        <div className="property__image-wrapper">
          <img className="property__image" src="img/apartment-01.jpg" alt="" />
        </div>
        <div className="property__image-wrapper">
          <img className="property__image" src="img/apartment-02.jpg" alt="" />
        </div>
        <div className="property__image-wrapper">
          <img className="property__image" src="img/apartment-03.jpg" alt="" />
        </div>
        <div className="property__image-wrapper">
          <img className="property__image" src="img/studio-01.jpg" alt="" />
        </div>
        <div className="property__image-wrapper">
          <img className="property__image" src="img/apartment-01.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
