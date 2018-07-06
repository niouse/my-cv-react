import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

import ScrollTop from "./../components/scroll-top/scroll-top.component.js";

import styled from "styled-components";
import {
  Container,
  CenterAll,
  P,
  BigText,
  Title1,
} from "./../components/styled-components";
import { isPc } from "../api/theme-utils";


const BgBox = Container.extend`
  background: ${props => `url(${props.bg})`};
  background-size: cover;
  width: 100%;
  max-width: 100%;
`;

const CenterBox = CenterAll.extend`
  margin: auto;
  max-width: 800px;
  flex-direction: ${isPc("row", "column")};
  flex: 1;
`;

const Image = styled.img.attrs({
  id: "diamond",
  src: props => props.image,
  alt: "#"
})`
  height: 120px;
`;

const RespBox = styled(Box)`
  justify-content :  ${isPc("flex-start", "center")};
`

const Banner = ({ infos, title, image, bg }) => {
  return (
    <BgBox id="banner" bg={bg}>
      <CenterBox>
        <Image image={image} />
        <RespBox pl="30px">
          <BigText>{infos.firstName + " " + infos.lastName}</BigText>
          <Title1>{title}</Title1>
          <P>{infos.presentation}</P>
        </RespBox>
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
  image: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
};
export default Banner;
