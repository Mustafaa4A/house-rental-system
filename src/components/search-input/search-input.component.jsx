import { useState } from "react";
import { FcSearch } from "react-icons/fc";
const SearchInput = () => {
  const [inputText, setInputText] = useState("");

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
      <form action="." method="get">
        <div className="input-icon">
          <span className="input-icon-addon">
            <FcSearch style={{ fontSize: "1.2em" }} />
          </span>
          <input
            type="text"
            value={inputText}
            className="form-control"
            placeholder="Search…"
            onChange={handlerChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
