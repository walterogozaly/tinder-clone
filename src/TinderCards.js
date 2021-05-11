import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Peter Thiel',
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5a836fff31358e4955ad6549%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D234%26cropX2%3D790%26cropY1%3D7%26cropY2%3D563"
    },
    {
      name: 'Jane Fraser',
      url: "https://media4.s-nbcnews.com/j/newscms/2020_37/3411147/200910-jane-fraser-ew-1102a_93d96b62877506c4767afe48ed6fd5ef.fit-760w.jpg"
    }
  ]);

  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard>{person.name}</TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;
