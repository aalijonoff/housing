import React, { useRef } from "react";
import { Carousel } from "antd";
import { Container, ContainerCards } from "./styled";
import UyImg from "../../assets/images/uy.jpg";
import Uycha from "../../assets/images/uycha.jpg";
import Villa from "../../assets/images/villa.jpg";
import { Icon } from "../Carousel/style";
import Card from "../card/index";
const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Properties = () => {
  const slider = useRef();
  return (
    <Container>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <Carousel ref={slider} dots autoplay>
        <Container.Img src={UyImg} />
        <ContainerCards>
          <Card />
        </ContainerCards>
        <Container.Img src={Villa} />
      </Carousel>
    </Container>
  );
};
export default Properties;
