import React from "react";
import Filter from "../../components/Filter";
import Card from "../card";
import Carousel from "../Carousel";
import Category from "../Category";
import Recommemded from "../Recommem";
import WhyChooseUs from "../whyChooseUs";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommemded />
      <Card />
      <WhyChooseUs />
      <Category />
    </Container>
  );
};
export default Home;
