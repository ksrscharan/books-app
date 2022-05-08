import React, { useEffect, useState } from "react";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import SearchBar from "../SearchBar/SearchBar";
import "./NavbarPanel.css";

function Navbar(props) {
  // eslint-disable-next-line
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState("");

  let {
    orderBy,
    setOrderBy,
    cards,
    setSearchTerm,
    setCards,
    setStartIndex,
    filters,
    setFilters,
  } = props;

  useEffect(() => {
    setCount(Object.values(filters).filter((a) => a).length);
    setEnabled(...(enabled + Object.values(filters).filter((a) => a)));
    console.log(enabled, "enabled");
  }, [filters]);

  const [filterStyle, setFilterStyle] = useState({ display: "none" });

  let changeDisplay = () => {
    if (filterStyle.display === "none") {
      setFilterStyle({ ...filterStyle, display: "inline-block" });
    } else {
      setFilterStyle({ ...filterStyle, display: "none" });
    }
  };

  return (
    <div className="nav-panel">
      <button onClick={changeDisplay} className="filter-button">
        Filters {count}{" "}
      </button>
      <div className="hide">
        {JSON.stringify(filters)
          .replaceAll(":", " : ")
          .replaceAll('"', "")
          .replaceAll("{", "")
          .replaceAll("}", "")
          .replaceAll(',', " , ")}
      </div>
      <FiltersPanel
        filterStyle={filterStyle}
        setOrderBy={setOrderBy}
        setFilterStyle={setFilterStyle}
        filters={filters}
        setFilters={setFilters}
      />
      <SearchBar setSearchTerm={setSearchTerm} setStartIndex={setStartIndex} />
    </div>
  );
}

export default Navbar;
