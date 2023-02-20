const CarouselItem = ({ img, caption, text }) => (
  <div className="carousel-item active h-100">
    <img className="d-block h-100 w-100" alt="" src={img} />
    <div className="carousel-caption-background d-none d-md-block"></div>
    <div className="carousel-caption d-none d-md-block">
      <h3>{caption}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default CarouselItem;
