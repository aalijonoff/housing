import React from "react";
import {
  Wrapper,
  Container,
  Cards,
  CardsAbout,
  Furniture,
  FurnitureContainer,
  CardFooter,
  CardFooterRight,
  CardFooterLeft,
} from "./styled";
import Featured from "../../assets/images/featured (1).png";
import Sale from "../../assets/images/sale.png";
const Card = () => {
  return (
    <Wrapper>
      <Container>
        <Cards>
          <Cards.Img>
            <Cards.Featured src={Featured} />
            <Cards.Sale src={Sale}/>
          </Cards.Img>
          <Cards.User>user</Cards.User>
          <CardsAbout>
            <CardsAbout.Title>This is title for card</CardsAbout.Title>
            <CardsAbout.Location>this is location text</CardsAbout.Location>
            <FurnitureContainer>
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>
            </FurnitureContainer>
          </CardsAbout>
          <CardFooter>
            <CardFooterLeft>
              <CardFooterLeft.OldPrice>2.500$</CardFooterLeft.OldPrice>
              <CardFooterLeft.Price>7.500$</CardFooterLeft.Price>
            </CardFooterLeft>
            <CardFooterRight>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
            </CardFooterRight>
          </CardFooter>
        </Cards>{" "}
        <Cards>
          <Cards.Img>this is img</Cards.Img>
          <Cards.User>user</Cards.User>
          <CardsAbout>
            <CardsAbout.Title>This is title for card</CardsAbout.Title>
            <CardsAbout.Location>this is location text</CardsAbout.Location>
            <FurnitureContainer>
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>
            </FurnitureContainer>
          </CardsAbout>
          <CardFooter>
            <CardFooterLeft>
              <CardFooterLeft.OldPrice>2.500$</CardFooterLeft.OldPrice>
              <CardFooterLeft.Price>7.500$</CardFooterLeft.Price>
            </CardFooterLeft>
            <CardFooterRight>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
            </CardFooterRight>
          </CardFooter>
        </Cards>{" "}
        <Cards>
          <Cards.Img>this is img</Cards.Img>
          <Cards.User>user</Cards.User>
          <CardsAbout>
            <CardsAbout.Title>This is title for card</CardsAbout.Title>
            <CardsAbout.Location>this is location text</CardsAbout.Location>
            <FurnitureContainer>
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>{" "}
              <Furniture>
                <Furniture.Logo>G</Furniture.Logo>
                <Furniture.Text>2 rooms</Furniture.Text>
              </Furniture>
            </FurnitureContainer>
          </CardsAbout>
          <CardFooter>
            <CardFooterLeft>
              <CardFooterLeft.OldPrice>2.500$</CardFooterLeft.OldPrice>
              <CardFooterLeft.Price>7.500$</CardFooterLeft.Price>
            </CardFooterLeft>
            <CardFooterRight>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
              <CardFooterRight.Logo>H</CardFooterRight.Logo>
            </CardFooterRight>
          </CardFooter>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Card;
