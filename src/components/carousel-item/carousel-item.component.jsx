const CarouselItem = ({ img, caption, text }) => (
  <div className="carousel-item active">
    <img className="d-block w-100" alt="" src={img} />
    <div className="carousel-caption-background d-none d-md-block"></div>
    <div className="carousel-caption d-none d-md-block">
      <h3>{img}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default CarouselItem;
