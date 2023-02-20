import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import BlankPage from "../../components/blank-page/blank-page.component";

const NotFoundPage = () => {
  return (
    <BlankPage>
      <div class="empty">
        <div class="empty-header">404</div>
        <p class="empty-title">Oops… You just found an error page</p>
        <p class="empty-subtitle text-muted">
          We are sorry but the page you are looking for was not found
        </p>
        <div class="empty-action">
          <Link to={"/"} className="btn btn-primary">
            <BsArrowLeft />
            <span className="p-2 pt-1 pb-1">Back to Home</span>
          </Link>
        </div>
      </div>
    </BlankPage>
  );
};
export default NotFoundPage;
