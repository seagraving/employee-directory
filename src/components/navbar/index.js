import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Employee Directory
      </a>
      
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="searchField"
            value={props.searchField}
            onChange={props.handleChange}
          />
           
        </form>
    </nav>
  );
}

export default Navbar;
