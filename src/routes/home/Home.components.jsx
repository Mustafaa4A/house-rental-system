import { useEffect } from "react";
import PageBody from "../../components/page-body/page-body.component";
import SearchInput from "../../components/search-input/search-input.component";

import description from "./description";
import "./home.styles.css";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <div
        className="main w-100 "
        style={{ backgroundImage: `url(${description[1].img})` }}
      >
        <div className="main-text">
          <h2>Search and Rent new House</h2>
          <SearchInput style={{ background: "transparent" }} />
        </div>
      </div>

      <PageBody>
        <div className="row mt-4">
          <h1 className="text-center mb-4">Our Services</h1>
          <div className="col-md-4  p-2">
            <div className="card p-3 bg-transparent card-link-pop">
              <div className="text-center">
                <span
                  className="avatar avatar-2xl avatar-rounded position-relative"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                    backgroundPosition: "top",
                  }}
                ></span>
                <div className="card-title mt-2 mb-2">Salling House</div>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                optio? Accusantium fuga tempora nobis ut. Minus tempore, non
                enim similique accusamus sequi rem laboriosam repudiandae
                reprehenderit alias doloribus, nam minima!
              </p>
            </div>
          </div>
          <div className="col-md-4  p-2">
            <div className="card p-3 bg-transparent card-link-pop">
              <div className="text-center">
                <span
                  className="avatar avatar-2xl avatar-rounded position-relative"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundPosition: "top",
                  }}
                ></span>
                <div className="card-title mt-2 mb-2">Rental House</div>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                optio? Accusantium fuga tempora nobis ut. Minus tempore, non
                enim similique accusamus sequi rem laboriosam repudiandae
                reprehenderit alias doloribus, nam minima!
              </p>
            </div>
          </div>
          <div className="col-md-4  p-2">
            <div className="card p-3 bg-transparent card-link-pop">
              <div className="text-center">
                <span
                  className="avatar avatar-2xl avatar-rounded position-relative"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundPosition: "top",
                  }}
                ></span>
                <div className="card-title mt-2 mb-2">
                  Constraction for Houses
                </div>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                optio? Accusantium fuga tempora nobis ut. Minus tempore, non
                enim similique accusamus sequi rem laboriosam repudiandae
                reprehenderit alias doloribus, nam minima!
              </p>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};
export default Home;
