import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'grid-styled'
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { isPc } from '../api/theme-utils';
import { ToolBar, Title2, Title, Date, Check, Logo } from '../components/styled-components';

const Container = styled.div`
  padding : ${isPc('50px', '10px')};
`

const SectionTitle = Title.extend`
  border-bottom : 1px solid;
  margin-bottom : 20px;
`

const Ul = styled.ul`
  list-style-type:none;
`

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ExperienceDetail = ({
  exp,
  closeDetails,
  isDetailOpen,
  barbg = 'green'
}) => {
  return (
    <Dialog
      open={isDetailOpen}
      onClose={closeDetails}
      fullWidth
      fullScreen
      TransitionComponent={Transition}>
      <ToolBar>
        <IconButton color="inherit" onClick={closeDetails} aria-label="Close">
          <CloseIcon />
        </IconButton>
        <Title2>{exp.title}</Title2>
        <Date>{exp.startDate}-{exp.endDate}</Date>
      </ToolBar>

      <Container>
        <Flex justifyContent="space-between" pb="10px">
          <div>{exp.duration}</div>
          <div>{exp.type}</div>
        </Flex>
        <Box pb="30px">
          <SectionTitle tertiary>  DESCRIPTION  </SectionTitle>
          <div>{exp.description}</div>
          <Ul>
            {exp.skillsLearned.map((skillsLearned, index) => (
              <li key={"skillLearned" + index}>
                <Check />{skillsLearned}
              </li>
            ))}
          </Ul>
        </Box>
        <Box pb="30px">
          <SectionTitle tertiary> MISSIONS  </SectionTitle>
          <ul>
            {exp.missions.map((mission, index) => (
              <li key={"mission" + index}>{mission}</li>
            ))}
          </ul>
        </Box>
        <Box>
          {exp.society && <SectionTitle tertiary>SOCIETE</SectionTitle>}
          {exp.society && (
            <div>
              <div>
                <div>{exp.society.description}</div>
              </div>
              <a href={exp.society.link}>
                <Logo logo={exp.society.logo} />
              </a>
            </div>
          )}
        </Box>
      </Container>
    </Dialog>
  )
}

ExperienceDetail.propTypes = {
  exp: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    society: PropTypes.object
  }).isRequired,
  closeDetails: PropTypes.func.isRequired,
  isDetailOpen: PropTypes.bool.isRequired,
  barbg: PropTypes.string
}

export default ExperienceDetail