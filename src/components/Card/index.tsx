import React from "react";
import { StyledCard, Header, Content, Footer } from "./style";

const Card = ({ card }) => {
  const colorIdentity = card.color_identity.join("");

  console.log(">>>>cardid", colorIdentity);

  return (
    <StyledCard colorIdentity={colorIdentity}>
      <Header>
        {card.color_identity}
        {card.name}
        {card.mana_cost}
      </Header>
      <Content>
        {card.image_uris?.art_crop ? (
          <img src={card.image_uris.art_crop} />
        ) : (
          <p>No Image found</p>
        )}
        <p>{card.oracle_text}</p>
      </Content>
    </StyledCard>
  );
};

export default Card;
