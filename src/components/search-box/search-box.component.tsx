import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProperties = {
  placeholder?: string,
  className: string,
  OnSearchChangeHandler : ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ OnSearchChangeHandler, placeholder, className }: SearchBoxProperties) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={OnSearchChangeHandler}
  />
);

export default SearchBox;
