import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./MainPanel.css";

function MainPanel(props) {
  let { cards, filters, setFilters, setMaxResults } = props;
  let { forSaleOnly, ratedOnly, ratingsTarget, priceRange } = filters;
  useEffect(() => {}, []);
  // console.log(cards)
  return (
    <div className="main-panel">
      {/* 
        0 0 0 
        1 0 0
        0 2 0
        0 0 3
        1 2 0
        0 2 3
        1 0 3
        1 2 3
      */}
      {/* 1. SALE, 2. RATING, 3. PRICE
        ANY ONE ENABLED
            1. 1 0 0
            2. 0 2 0
            3. 0 0 3

        ANY 2 ENABLED
            4. 1 2 0
            5. 1 0 3
            6. 0 2 3

        ALL 3 ENABLED
            7. 1 2 3

        DEFAULT CASE
            8. 0 0 0  
      */}

      {/* CASE 1 */}
      {/* NO SALE, NO RATING, NO PRICE */}
      {/* 0 0 0 */}
      {cards &&
        forSaleOnly === false &&
        ratedOnly === false &&
        priceRange == 0 && <Card cards={cards} />}

      {/* CASE 2 --------------------------------*/}
      {/* SALE ONLY, NO RATING, NO PRICE */}
      {/* 1 0 0 */}
      {cards && forSaleOnly === true && ratedOnly === false && priceRange == 0 && (
        <Card
          cards={cards.filter((card) => {
            return card.saleInfo.saleability === "FOR_SALE";
          })}
        />
      )}

      {/* case 3 ------------------------------------*/}
      {/* NO SALE, RATED ONLY, NO PRICE RANGE */}
      {/* 0 2 0 */}
      {
        // eslint-disable-next-line
        cards && forSaleOnly === false && ratedOnly === true && priceRange == 0 && (
          <Card
            cards={cards.filter((card) => {
              return (
                card.volumeInfo.averageRating &&
                card.volumeInfo.averageRating >= ratingsTarget
              );
            })}
          />
        )
      }

      {/* case 4 --------------------------- */}
      {/* no sale, no rate, yes pricing */}
      {/* 0 0 3 */}
      {cards && forSaleOnly === false && ratedOnly === false && priceRange > 0 && (
        <Card
          cards={cards.filter((card) => {
            return card.saleInfo.saleability === "FOR_SALE"
              ? priceRange >= card.saleInfo.listPrice.amount
              : card.saleInfo.saleability === "NOT_FOR_SALE";
          })}
        />
      )}

      {/* CASE 5 ------------------------------------ */}
      {/* RATED ONLY, SALE ONLY, NO PRICE RANGE */}
      {/* 1 2 0 */}
      {
        // eslint-disable-next-line
        cards && forSaleOnly === true && ratedOnly === true && priceRange == 0 && (
          <Card
            cards={cards.filter((card) => {
              return (
                card.saleInfo.saleability === "FOR_SALE" &&
                card.volumeInfo.averageRating &&
                card.volumeInfo.averageRating >= ratingsTarget
              );
            })}
          />
        )
      }

      {/* CASE 6 ------------------------------------ */}
      {/* RATED ONLY, SALE ONLY, NO PRICE RANGE */}
      {/* 0 2 3 */}

      {
        // eslint-disable-next-line
        cards && forSaleOnly === false && ratedOnly === true && priceRange > 0 && (
          <Card
            cards={cards.filter((card) => {
              return (
                card.volumeInfo.averageRating &&
                card.volumeInfo.averageRating >= ratingsTarget &&
                (card.saleInfo.saleability === "FOR_SALE"
                  ? priceRange >= card.saleInfo.listPrice.amount
                  : card.saleInfo.saleability === "NOT_FOR_SALE")
              );
            })}
          />
        )
      }

      {/* CASE 7 ------------------------------------ */}
      {/* RATED ONLY, NO SALE ONLY, PRICE RANGE */}
      {/* 1 0 3 */}
      {cards && forSaleOnly === true && ratedOnly === false && priceRange > 0 && (
        <Card
          cards={cards.filter((card) => {
            return (
              card.saleInfo.saleability === "FOR_SALE" &&
              (card.saleInfo.saleability === "FOR_SALE"
                ? priceRange >= card.saleInfo.listPrice.amount
                : card.saleInfo.saleability === "NOT_FOR_SALE")
            );
          })}
        />
      )}

      {/* CASE 8 ----------------------------- */}
      {/* RATED ONLY, SALE ONLY, PRICE RANGE */}
      {/* 1 2 3 */}
      {cards && forSaleOnly === true && ratedOnly === true && priceRange > 0 && (
        <Card
          cards={cards.filter((card) => {
            return (
              card.volumeInfo.averageRating &&
              card.volumeInfo.averageRating >= ratingsTarget &&
              card.saleInfo.saleability === "FOR_SALE" &&
              (card.saleInfo.saleability === "FOR_SALE"
                ? priceRange >= card.saleInfo.listPrice.amount
                : card.saleInfo.saleability === "NOT_FOR_SALE")
            );
          })}
        />
      )}

      {/* NO CARDS */}
      {cards === undefined && <div className="no-result">No Results!</div>}
    </div>
  );
}

export default MainPanel;
