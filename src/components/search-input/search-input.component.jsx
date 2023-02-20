import { useState } from "react";
import { FcSearch } from "react-icons/fc";
const SearchInput = ({ ...other }) => {
  const [inputText, setInputText] = useState("");

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
      <form onSubmit={submitHandler}>
        <div className="input-icon">
          <span className="input-icon-addon">
            <FcSearch size={23} />
          </span>
          <input
            type="text"
            value={inputText}
            className="form-control"
            placeholder="Search…"
            onChange={handlerChange}
            {...other}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
