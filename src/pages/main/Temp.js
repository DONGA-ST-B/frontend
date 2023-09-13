import React, { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

  const nextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const prevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };

  return (
    <SliderContainer>
      <SliderButton onClick={prevCard}>Previous</SliderButton>
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            style={{ transform: `translateX(${(index - currentCard) * 100}%)` }}
          >
            {card}
          </Card>
        ))}
      </CardContainer>
      <SliderButton onClick={nextCard}>Next</SliderButton>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const Card = styled.div`
  flex: 0 0 100%;
  padding: 16px;
  text-align: center;
  transition: transform 0.5s;
`;

const SliderButton = styled.button`
  margin: 8px;
  padding: 8px 16px;
  background-color: #1aabde;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
`;
