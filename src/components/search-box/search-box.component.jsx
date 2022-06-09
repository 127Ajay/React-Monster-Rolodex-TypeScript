import "./search-box.styles.css";

const SearchBox = ({ OnSearchChangeHandler, placeholder, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={OnSearchChangeHandler}
  />
);

export default SearchBox;
