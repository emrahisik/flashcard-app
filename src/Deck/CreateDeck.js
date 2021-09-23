import React from "react";
import DeckOperation from "./DeckOperation";

/*
CreateDeck comp. calls DeckOperation comp with a 
prop "isNew" set to true to render the create deck page.
*/

const CreateDeck = () => {

    return <DeckOperation isNew={true} />
};

export default CreateDeck;