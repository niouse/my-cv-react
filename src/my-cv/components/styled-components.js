import styled from 'styled-components';
import { getTheme, isPc } from '../api/theme-utils';



export const Container = styled.div`
    margin : 0 auto 0 auto;
    display : flex;
    flex : 1;
    flex-direction : column;
    align-items : center;
    max-width : 1080px;
    background-color : none;
    color : ${getTheme('text')};
`


export const CenterAll = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`

export const H2 = styled.h2`
  color:${getTheme('text')};
  font-weight: bolder;
  font-size: 2.5em;
  line-height: 1.1;
`

export const H3 = styled.h3`
  color:${getTheme('text3')};
  font-weight: bolder;
  font-size: 1.5em;
  line-height: 1.1;
`

export const P = styled.p`
    text-align : ${isPc('left', 'center')};
    color:${theme => theme.text2};
    font-size : 0.9em;
    line-height: 1.5;
    padding : 10px;
`

export const Title = styled.div`
    font-size : 1.5em;
    font-weight : 900;
    color : ${getTheme('text')};
    text-align : center;
    width : 100%;
`



      
  
