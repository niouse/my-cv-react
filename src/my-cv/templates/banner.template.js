import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

import ScrollTop from "./../components/scroll-top/scroll-top.component.js";

import styled from "styled-components";
import {
  Container,
  CenterAll,
  H2,
  H3,
  P
} from "./../components/styled-components";
import { isPc } from "../api/theme-utils";

const BgBox = Container.extend`
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  width: 100%;
  max-width: 100%;
`;

const CenterBox = CenterAll.extend`
  flex: 1;
  flex-direction: ${isPc("row", "column")};
  max-width: 800px;
  margin: auto;
`;

const NameBox = H3.extend`
  text-align: ${isPc("left", "center")};
`;

const ImageBox = CenterAll.extend`
  width: ${isPc("500px", "250px")};
  height: 250px;
`;

const Image = styled.img.attrs({
  id: "diamond",
  src: props => props.image,
  alt: "#"
})`
  height: 120px;
`;

const Name = styled.strong`
  padding-left: 10px;
  font-size: 2em;
`;

const Title = H2.extend`
  text-align: ${isPc("left", "center")};
`;

const Banner = ({ infos, title, texts, image, bg }) => {
  return (
    <BgBox id="banner" bg={bg}>
      <CenterBox>
        <ImageBox>
          <Image image={image} />
        </ImageBox>
        <Box>
          <NameBox>
            {texts.beforeName}
            <Name>{infos.firstName + " " + infos.lastName}</Name>
          </NameBox>
          <Title>{title}</Title>
          <P>{infos.presentation}</P>
        </Box>
      </CenterBox>
      <ScrollTop />
    </BgBox>
  );
};

Banner.propTypes = {
  infos: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    presentation: PropTypes.string.isRequired
  }),
  title: PropTypes.string,
  texts: PropTypes.shape({
    beforeName: PropTypes.string.isRequired
  }),
  image: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
};
export default Banner;
