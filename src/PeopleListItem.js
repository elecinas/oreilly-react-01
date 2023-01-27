import React from "react";

export const PeopleListItem = ({person}) => (
    <div>
        <h3>{person.name}</h3>
        <p>Age: {person.age}</p>
        <p>Hair color: {person.hairColor}</p>
    </div>
)