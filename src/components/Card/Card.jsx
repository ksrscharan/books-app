import React, { useEffect, useState } from "react";
import PopUpPanel from "../PopUpPanel/PopUpPanel";
import "./Card.css";

function Card({ cards, setMaxResults }) {
  // console.log(cards);
  const [popUp, setPopUp] = useState({ display: "none" });
  const [popIndex, setPopIndex] = useState(0);
  // console.log(popUp)

  return (
    <>
      {cards &&
        cards.map((card, index) => (
          <div key={index} className="card">
            <div className="left">
              {card.volumeInfo.imageLinks != undefined && (
                <img
                  alt="poster"
                  src={card.volumeInfo.imageLinks.smallThumbnail}
                  className="card-poster"
                />
              )}
            </div>

            <div className="right">
              <div className="title">{card.volumeInfo.title}</div>
              <div className="author">
                <small>Authors: </small>
                {card.volumeInfo.authors && card.volumeInfo.authors.toString()}
              </div>
              <div className="category">
                <small>Category: </small>
                {card.volumeInfo.categories &&
                  card.volumeInfo.categories.toString()}
              </div>
              <div className="ratings">
                Rating:{" "}
                {card.volumeInfo.averageRating
                  ? card.volumeInfo.averageRating
                  : "0"}
                /5
              </div>
              {card.saleInfo.saleability === "FOR_SALE" && (
                <div>
                  {card.saleInfo.listPrice.currencyCode}:{" "}
                  {card.saleInfo.listPrice.amount}
                </div>
              )}
              {card.saleInfo.saleability === "NOT_FOR_SALE" && (
                <div>Not For Sale</div>
              )}
              <button
                className="details"
                onClick={() => {
                  if (popUp.display === "none") {
                    setPopUp({ ...popUp, display: "block" });
                  } else {
                    setPopUp({ ...popUp, display: "none" });
                  }
                  setPopIndex(index);
                }}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      {popUp.display === "block" && (
        <PopUpPanel card={cards[popIndex]} popUp={popUp} setPopUp={setPopUp} />
      )}

      {cards.length === 0 && (
        <div className="no-result">
          Due to Google API limitations, data might be paginated by Server,
          Check Next Page for More Books.
        </div>
      )}
    </>
  );
}

export default Card;
