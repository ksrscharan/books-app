import React, { useEffect } from "react";
import './Card.css'

function Card({ cards, setMaxResults }) {
  console.log(cards)
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
                  className="poster"
                />
              )}
            </div>

            <div className="right">
              <div className="title">{card.volumeInfo.title}</div>
              <div>
                <div>Authors: </div>
                {card.volumeInfo.authors &&
                  card.volumeInfo.authors.map((author) => (
                    <span key={author} className="author">
                      {" | "}{author}{" | "}
                    </span>
                  ))}
              </div>
              <div>
                <div>Category: </div>
                {card.volumeInfo.categories &&
                  card.volumeInfo.categories.map((category) => (
                    <span key={category} className="category">
                      {" | "}{category}{" | "}
                    </span>
                  ))}
              </div>
              <button>
                Rating:{" "}
                {card.volumeInfo.averageRating
                  ? card.volumeInfo.averageRating
                  : "0"}
                /5
              </button>
              {card.saleInfo.saleability === "FOR_SALE" && (
                <div>
                  {card.saleInfo.listPrice.currencyCode}:{" "}
                  {card.saleInfo.listPrice.amount}
                </div>
              )}
              {card.saleInfo.saleability === "NOT_FOR_SALE" && (
                <div>Not For Sale</div>
              )}
            </div>
          </div>
        ))}

        {cards.length === 0 && <div className="no-result">Due to Google API limitations, data might be paginated by Server, Check Next Page for More Books.</div>}
    </>
  );
}

export default Card;
