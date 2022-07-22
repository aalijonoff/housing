import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 1440px;
  padding: 0 130px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 381;
  height: 429px;
  background-color: var(--text-color);
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  position: relative;
`;
Cards.Img = styled.div`
  width: 381px;
  height: 220px;
  background-color: green;
`;
Cards.Featured = styled.img`
  width: 73px;
  position: absolute;
  height: 23px;
  left: 5.26%;
  right: 75.53%;
  top: calc(50% - 23px / 2 - 183px);
  border-radius: 3px;
`;
Cards.Sale = styled.img`
  position: absolute;
  height: 23px;
  left: 76.05%;
  right: 5.26%;
  top: calc(50% - 23px / 2 - 183px);
`;
Cards.User = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  left: 320px;
  top: 191px;
  background-color: aliceblue;
  border-radius: 50%;
  text-align: center;
`;
const CardsAbout = styled.div`
  display: flex;
  flex-direction: column;
  height: 148px;
  padding-left: 20px;
  padding-right: 20px;
`;
CardsAbout.Title = styled.div`
  display: flex;
  margin-top: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
CardsAbout.Location = styled.div`
  margin-top: 4px;
  color: #696969;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const FurnitureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Furniture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Furniture.Logo = styled.div`
  padding-top: 18.7px;
  padding-bottom: 5px;
  color: var(--sub-texts-color);
`;
Furniture.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--sub-texts-color);
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  align-items: center;
  margin-top: 16px;
  border-top: 1px solid #696969;
`;
const CardFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
CardFooterLeft.OldPrice = styled.div`
  color: var(--sub-text-color);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
CardFooterLeft.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const CardFooterRight = styled.div`
  display: flex;
`;
CardFooterRight.Logo = styled.div`
  color: var(--sub-text-color);
  background-color: var(--sub-text-color);
  margin-left: 20px;
`;
export {
  Wrapper,
  Container,
  Cards,
  CardsAbout,
  FurnitureContainer,
  Furniture,
  CardFooter,
  CardFooterLeft,
  CardFooterRight,
};
