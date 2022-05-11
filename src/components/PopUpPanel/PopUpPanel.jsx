import React, { useEffect } from "react";
import "./PopUpPanel.css";

function PopUpPanel({ card, popUp, setPopUp }) {
  useEffect(() => {
    // console.log(popUp);
  }, [popUp]);

  return (
    <>
      <div
        className="pop-up"
        style={{ ...popUp }}
        // onMouseLeave={() => {
        //   setPopUp({ ...popUp, display: "none" });
        // }}
      >
        <div
          onClick={() => {
            setPopUp({ ...popUp, display: "none" });
            console.log(popUp);
          }}
          className="close"
        >
          Close
        </div>
        <div className="pop-left">
          <img
            src={card.volumeInfo.imageLinks.thumbnail}
            alt={card.volumeInfo.title}
          />
        </div>
        <div className="pop-right">
          <div className="title">{card.volumeInfo.title}</div> <br />
          <div className="author">
            Authors: {card.volumeInfo.authors.toString()}
          </div>
          <br />
          <div className="category">
            Categories: {card.volumeInfo.categories.toString()}
          </div>
          <br />
          <div>SALE: {card.saleInfo.saleability.replaceAll("_", " ")}</div>
          <br />
          <div>Page Count: {card.volumeInfo.pageCount}</div>
          <br />
          <div>Publishers: {card.volumeInfo.publisher}</div>
          <br />
          <div>
            <i>Description:</i> {card.volumeInfo.description}
          </div>
          <br />
          {card.volumeInfo.industryIdentifiers.map((identifier, index) => (
            <div key={index}>
              {identifier.type.replaceAll("_", " ")}: {identifier.identifier}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopUpPanel;
