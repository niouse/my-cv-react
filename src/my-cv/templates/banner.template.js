import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

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

const Banner = ({ infos, image }) => {
  return (
    <BgBox>
      <CenterBox>
        <Image image={image} />
        <RespBox pl="30px">
          <BigText>{infos.firstName + " " + infos.lastName}</BigText>
          <Title1>{infos.title}</Title1>
          <P>{infos.presentation}</P>
        </RespBox>
      </CenterBox>
    </BgBox>
  );
};

Banner.propTypes = {
  infos: PropTypes.shape({
    title : PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    presentation: PropTypes.string.isRequired
  }),
  image: PropTypes.string.isRequired,
};
export default Banner;
