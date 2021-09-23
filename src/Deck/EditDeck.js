import React from "react";
import DeckOperation from "./DeckOperation";

/*
EditDeck comp. calls DeckOperation comp with 3
props."deck", "isNew" and "setDeck" props are passed down to the DeckOperation comp.
"isNew" set to false to render the edit deck page.
setDeck controls the deck update. So it re-renders "deck" inside the ViewDeck comp.
*/

const EditDeck = ({deck, setDeck}) => {
    
    return <DeckOperation deck={deck} isNew={false} setDeck={setDeck}/>
};

export default EditDeck;