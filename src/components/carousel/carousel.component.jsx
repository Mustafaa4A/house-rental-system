const Carousel = ({ children, type }) => (
  <div
    id={`carousel-${type}`}
    className="carousel slide h-100"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">{children}</div>
    <a
      className="carousel-control-prev"
      href="#carousel-captions"
      role="button"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carousel-captions"
      role="button"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </a>
  </div>
);

export default Carousel;
