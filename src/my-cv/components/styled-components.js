import styled from 'styled-components';
import { getTheme, isPc, getTextColor, getBgColor } from '../api/theme-utils';
import check from './../images/check.png'


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
export const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  background-color : ${getBgColor};
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
    letter-spacing : 2px;
`

export const Text = styled.span`
  color:${theme => theme.text2};
  font-size : 0.9em;
  line-height: 1.5;
  letter-spacing : 2px;
  margin : 0;
`

export const Title = styled.div`
    font-size : 1.5em;
    font-weight : 900;
    color : ${getTextColor};
`

export const Title1 = Title.extend`
    font-size : 2.5em;
`

export const Title2 = Title.extend`
    font-size : 2em;
`


export const BigText = styled.strong`
  font-size: 4em;
  font-weight : bold;
  color : ${getTheme('text2')};
`;

export const Date = styled.div`
  font-size: 1.2em;
  font-weight : bold;
  color : ${getTheme('text2')};
  letter-spacing : 3px;
`

export const ToolBar = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  height : 60px;
  padding : 0px 10px 0px 10px;
  background-color : ${getTheme('bg2')};
  margin : 0; 
`

export const Check = styled.img.attrs({
  alt : "#",
  src : check,
})`
  height : 10px;
  width : 10px;
`

export const Logo = styled.img.attrs({
  alt : "#",
  src : props => props.logo,
})`
  height : 64px;
  width : auto;
`

  
