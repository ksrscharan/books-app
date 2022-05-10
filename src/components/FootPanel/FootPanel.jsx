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
      <span>per page</span>
      </div>
      
      <button
        className="nav-buttons"
        onClick={(e) => {
          if (parseInt(startIndex) + parseInt(maxResults) < 50) {
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
