import PageBody from "../../components/page-body/page-body.component";

const AboutUs = () => {
  return (
    <div className="page-wrapper">
      <PageBody>
        <div className="row mt-4">
          <h1 className="text-center mb-4">Get to know us</h1>
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

export default AboutUs;
