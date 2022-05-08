import React from "react";
import './FootPanel.css'

function Footpanel({ startIndex, setStartIndex, maxResults, setMaxResults }) {
  return (
    <div className="foot-panel">
      <button
        className="nav-buttons"
        onClick={(e) => {
          if (startIndex - maxResults > 0) {
            setStartIndex(parseInt(startIndex) - parseInt(maxResults));
            e.disabled = false;
          } else {
            setStartIndex(0);
            e.disabled = true;
          }
        }}
      >
        Previous
      </button>

      <div>
        {maxResults} per page. from Book No: {startIndex + 1} to Book No:{" "}
        {parseInt(startIndex) + parseInt(maxResults)}. May show less with filters enabled.
      </div>

      <select
        className="max-results"
        name="maxResults"
        
        onChange={(e) => {
          e.preventDefault();
          setMaxResults(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="10" selected>10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <button
        className="nav-buttons"
        onClick={(e) => {
          if (parseInt(startIndex) + parseInt(maxResults) < 500) {
            setStartIndex(parseInt(startIndex) + parseInt(maxResults));
            e.disabled = false;
          } else {
            e.disabled = true;
            setStartIndex(startIndex);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Footpanel;
