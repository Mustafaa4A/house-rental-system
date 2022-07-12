import PageBody from "../../components/page-body/page-body.component";
import Carousel from "../../components/carousel/carousel.component";
import CarouselItem from "../../components/carousel-item/carousel-item.component";
import description from "./description";

const Home = () => {
  return (
    <div className="page-wrapper">
      <Carousel type={"captions"}>
        {description.map((item) => (
          <CarouselItem
            img={item.img}
            caption={item.caption}
            text={item.text}
          />
        ))}
      </Carousel>
      <PageBody>
        <h1>Welcome to Home Page</h1>
      </PageBody>
    </div>
  );
};
export default Home;
