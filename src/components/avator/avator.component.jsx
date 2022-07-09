import { Link } from "react-router-dom";

const Avator = ({ size, target, img, name, title }) => {
  return (
    <Link
      to={"#"}
      className="nav-link d-flex lh-1 text-reset p-0"
      data-bs-toggle={target}
      aria-label="Open user menu"
    >
      <span
        className={`avatar avatar-${size}`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></span>
      {(name || title) && (
        <div className="d-none d-xl-block ps-2">
          <div>{name}</div>
          <div className="mt-1 small text-muted">{title}</div>
        </div>
      )}
    </Link>
  );
};

export default Avator;
