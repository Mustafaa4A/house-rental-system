import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Fragment } from "react";
import {
  RiShareForwardLine,
  RiFacebookCircleLine,
  RiTwitterFill,
} from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiCopy } from "react-icons//fi";
import Dropdown from "../dropdown/dropdown.component";
import Button from "../button/button.component";
import "./share-button.styles.css";

const ShareButton = ({ property }) => {
  const URL = "window.location.href";

  const copyText = () => {
    navigator.clipboard.writeText(URL);
  };
  console.log(window.location.pathname);
  return (
    <Fragment>
      <span
        className={`span text-secondary cursor-pointer  border border-1 border-dark rounded m-2 p-1`}
        data-bs-toggle="dropdown"
      >
        <RiShareForwardLine size={23} />
      </span>
      <Dropdown style={{ width: "350px" }}>
        <h3>Share this property</h3>
        <div className="row m-1">
          <div className="col-12 mt-2">
            <Button bg={"success"} icon={<BsWhatsapp size={20} />}>
              <WhatsappShareButton
                title={"Property\n"}
                url={URL}
                separator={""}
              >
                Whatsapp
              </WhatsappShareButton>
            </Button>
          </div>
          <div className="col-6 mt-2">
            <span>
              <Button bg={"secondary"} icon={<FiCopy size={20} />}>
                Copy link
              </Button>
            </span>
          </div>
          <div className="col-6 mt-2">
            <Button bg={"primary"} icon={<RiFacebookCircleLine size={20} />}>
              <FacebookShareButton
                title={"Property "}
                url={URL}
                quote={"Welcom"}
                hashtag={`#Property`}
                description={"Property"}
              >
                Facebook
              </FacebookShareButton>
            </Button>
          </div>
          <div className="col-6 mt-2">
            <Button bg={"secondary"} icon={<MdOutlineMail size={20} />}>
              <EmailShareButton
                subject="Property"
                body="This is a new Property\n"
                url={URL}
              >
                Email
              </EmailShareButton>
            </Button>
          </div>
          <div className="col-6 mt-2">
            <Button bg={"info"} icon={<RiTwitterFill size={20} />}>
              <TwitterShareButton
                title="Property"
                url={URL + "\n"}
                hashtags={["Property"]}
              >
                Twitter
              </TwitterShareButton>
            </Button>
          </div>
        </div>
      </Dropdown>
    </Fragment>
  );
};

export default ShareButton;
