import React from "react";
import CardOperation from "./CardOperation";

/*
EditCard comp. calls CardOperation comp with the 
prop "isNew" set to false to render the edit card page. 
"deck" prop passes down the deck data from ViewDeck comp 
to CardOperation comp. "setCardList" prop changes the cardList's 
state to re-render the card list on the View Deck page.
*/

const EditCard = ({deck, setCardList}) =>{
    return <CardOperation deck={deck} isNew={false} setCardList={setCardList} />;
};

export default EditCard;