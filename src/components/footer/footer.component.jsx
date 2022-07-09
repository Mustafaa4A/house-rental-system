import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-transparent d-print-none">
      <div className="container-xl">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                <span className="p-2">Fallow us on</span>
                <a
                  href="https://www.facebook.com/mustafaa4a"
                  className="link-secondary p-1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com/mustafaa4a"
                  className="link-secondary p-1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright &copy; {new Date().getFullYear()}
                <a
                  href="https://www.github.com/mustafaa4a"
                  className="link-secondary p-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Mustafa Abubakar
                </a>
                . All rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
