import React from 'react'
import PropTypes from 'prop-types'

import { Box, Flex } from 'grid-styled'
import styled from 'styled-components';

import check from './../images/check.png'

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { isPc } from '../api/theme-utils';

const Bar = styled(AppBar).attrs({
  style : props => ({backgroundColor : props.barbg}),
})`
  position: relative;
`

const SectionTitle = styled.div`
  border-bottom : 1px solid;
  margin-bottom : 20px;
`
const Container = styled.div`
  padding : ${isPc('50px', '10px')};
`

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ExperienceDetail = ({
  exp,
  closeDetails,
  isDetailOpen,
  barbg='green'
}) => {
  return (
    <Dialog
      open={isDetailOpen}
      onClose={closeDetails}
      fullWidth
      fullScreen
      TransitionComponent={Transition}>
      <Bar barbg={barbg}>
        <Toolbar>
          <IconButton color="inherit" onClick={closeDetails} aria-label="Close">
            <CloseIcon />
          </IconButton>
          {exp.title}
          {exp.startDate}-{exp.endDate}
        </Toolbar>
      </Bar>

      <Container>
        <Flex justifyContent="space-between" pb="40px">
          <div>{exp.duration}</div>
          <div>{exp.type}</div>
        </Flex>
        <Box pb="70px">
          <SectionTitle>  DESCRIPTION  </SectionTitle>
          <div>{exp.description}</div>
          <ul>
            {exp.skillsLearned.map((skillsLearned, index) => (
              <li key={"skillLearned" + index}>
                <img src={check} alt="check" />{skillsLearned}
              </li>
            ))}
          </ul>
        </Box>
        <Box pb="70px">
          <SectionTitle> MISSIONS  </SectionTitle>
          <ul>
            {exp.missions.map((mission, index) => (
              <li key={"mission" + index}>{mission}</li>
            ))}
          </ul>
        </Box>
        <Box>
          {exp.society && <SectionTitle>SOCIETE</SectionTitle>}
          {exp.society && (
            <div>
              <div>
                <div>{exp.society.description}</div>
              </div>
              <a href={exp.society.link}>
                <img src={exp.society.logo} alt="logo" />
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
  barbg : PropTypes.string
}

export default ExperienceDetail