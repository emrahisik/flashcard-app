import React from "react";
import { Link } from "react-router-dom";
import EnoughCards from "./EnoughCards";
import NotEnoughCards from "./NotEnoughCards";

/*
StudyDeck comp. renders the study page. "deck" data is received from
ViewDeck comp as a prop and passed down to NotEnoughCards and EnoughCards components.
If there are fewer than 3 cards in the current deck, NotEnoughCard comp is called. Otherwise,
EnoughCard comp. renders cards. 
*/

const StudyDeck = ({ deck }) => {
 
  
  return (
    <section>
        
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb w-50">
            <li className="breadcrumb-item" key="1">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" key="2">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page" key="3">
              Study
            </li>
          </ol>
        </nav>
      
      <div><h2>{deck.name}: Study</h2></div>
      <div>{deck.cards.length<3 ? <NotEnoughCards deck={deck} /> : <EnoughCards deck={deck} />}</div>
    </section>
  );
};

export default StudyDeck;
