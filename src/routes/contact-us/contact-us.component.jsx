import PageBody from "../../components/page-body/page-body.component";
import SendUsEmail from "../../components/send-us-email/send-us-email.component";
import Divider from "../../components/divider/divider.component";

import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <PageBody>
        <div className="row">
          <div className="col-md-5">
            <SendUsEmail />
          </div>
          <div className="col-md-7 mt-3 ">
            <h1>How Can We Help?</h1>
            <p>
              Please select a topic below related to your inquiry. If you don’t
              find what you need, fill out our contact form.
            </p>
            <div className="card p-4 w-90">
              <h3 className="card-title">Contact Information</h3>
              <Divider />
              <div className="mt-4">
                <MdLocationOn size={25} className="me-4" />
                <span className="fs-3">Mogadishu KM3</span>
              </div>
              <div className="mt-4">
                <BsTelephoneFill size={20} className="me-4" />
                <a href="tell:+252619355938" className="fs-3">
                  +252 683 891 399
                </a>
              </div>
              <div className="mt-4">
                <MdEmail size={25} className="me-4" />
                <a className="fs-3" href="mailto:musdhafa42@gmail.com">
                  somrent@somrental.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default ContactUs;
