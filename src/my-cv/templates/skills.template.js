import React from "react";
import PropTypes from "prop-types";

import { Box } from "grid-styled";
import styled from "styled-components";

import { Container } from "./../components/styled-components";
import SkillRate from "./../components/skill-rate.component.js";

import formatSkills from "./../api/format-skills";

import { Wrapper, Title } from "./../components/styled-components";

const AroundBox = Container.extend`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  max-width: 900px;
`;

const SkillBox = styled.div`
  display: inline-block;
  flex-basis: 0;
  flex-shrink: 0;
  flex-grow: 0;
  margin-bottom: 50px;
`;

const TitleBox = Wrapper.extend`
  justify-content : center;
  align-items : center;
  height : 60px;
  `

const SkillsContainer = ({ title, skills }) => (
  <SkillBox>
    <TitleBox tertiary><Title>{title.toUpperCase()}</Title></TitleBox>
    <Box pr="15px" pl="15px">
      {skills.map((item, index) => (
        <SkillRate key={title + index} name={item.name} rate={item.rate} />
      ))}
    </Box>
  </SkillBox>
);

const Skills = ({ skills, texts }) => {
  const formatedSkills = formatSkills(skills);
  return (
    <AroundBox>
      {formatedSkills.map((item, index) => {
        return (
          <SkillsContainer
            key={"skill" + index}
            title={item.type}
            skills={item.skills}
          />
        );
      })}
    </AroundBox>
  );
};

SkillsContainer.propTypes = {
  skills: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired
    })
  ).isRequired,
  texts: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Skills;
