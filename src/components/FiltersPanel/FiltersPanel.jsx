import React, { useState } from "react";
import './FiltersPanel.css'

function FiltersPanel({
  filterStyle,
  setOrderBy,
  setFilterStyle,
  filters,
  setFilters
}) {
  // console.log("PRICE RANGE: ",filters.priceRange)
  let changeDisplay = () => {
    setFilterStyle({ ...filterStyle, display: "none" });
  };


  return (
    <div
      className="filters-panel"
      onMouseLeave={changeDisplay}
      style={{ ...filterStyle}}
    >
      {/* SORT BY FILTER */}
      <div className="sort">
        <span>Sort By: </span>
        <select
        className="sort"
          name="orderBy"
          onClick={(e) => {
            e.preventDefault();
            setOrderBy(e.target.value);
          }}
        >
          <option value="newest">newest</option>
          <option value="relevance" selected>
            relevance
          </option>
        </select>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <span>Filters:</span>

        {/* SALE ONLY FILTER */}
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setFilters({ ...filters, forSaleOnly: !filters.forSaleOnly });
              console.log(filters.forSaleOnly);
            }}
          />
          <span>Only For Sale</span>
        </div>

        {/* RATINGS ONLY FILTER */}
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setFilters({ ...filters, ratedOnly: !filters.ratedOnly });
              console.log(filters.ratedOnly);
            }}
          />
          <span>Only With Ratings </span>
          <select
            className="rating"
            name="ratingsTarget"
            onClick={(e) => {
              e.preventDefault();
              setFilters({ ...filters, ratingsTarget: e.target.value });
            }}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span> Or Above</span>
        </div>

        {/* PRICE RANGE FILTER */}
        <div>
          <span>Price</span>
          <input
            type="range"
            min={0}
            max={10000}
            step={500}
            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
          />
          <span>{filters.priceRange}</span>
        </div>
      </div>
    </div>
  );
}

export default FiltersPanel;
