import React from "react";
import CardOperation from "./CardOperation";


/*
AddCard comp. calls CardOperation comp with the 
prop "isNew" set to true to render the add card page. 
"deck" prop passes down the deck data from ViewDeck comp 
to CardOperation comp. "setCardList" prop changes the cardList's
 state to re-render the card list on the View Deck page.
*/

const AddCard = ({deck, setCardList}) => {
    return <CardOperation deck={deck} isNew={true} setCardList={setCardList} />;
};

export default AddCard;



