import { useEffect, useState } from "react";
import "./App.css";
import Footpanel from "./components/FootPanel/FootPanel";
import MainPanel from "./components/MainPanel/MainPanel";
import Navbar from "./components/NavbarPanel/NavbarPanel";
// import Test from "./components/Test/Test";

function App() {
  // const [cardsUnchanged, setCardsUnchanged] = useState([])
  const [cards, setCards] = useState([]);
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("dummies");
  const [orderBy, setOrderBy] = useState("relevance");
  const [filters, setFilters] = useState({
    forSaleOnly: false,
    ratedOnly: false,
    ratingsTarget: 0,
    priceRange: 0,
  });

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCards(data.items);
      });

    // console.log(cards);
  }, [searchTerm, orderBy, startIndex, maxResults]);
  // console.log(priceRange)

  return (
    <div className="App">
      <Navbar
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        cards={cards}
        setSearchTerm={setSearchTerm}
        setCards={setCards}
        setStartIndex={setStartIndex}
        filters={filters}
        setFilters={setFilters}
      />
      {/* <MainPanel cards={cards} /> */}
      <MainPanel
        cards={cards}
        filters={filters}
        setFilters={setFilters}
        setMaxResults={setMaxResults}
      />
      <Footpanel
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
      />
    </div>
  );
}

export default App;
