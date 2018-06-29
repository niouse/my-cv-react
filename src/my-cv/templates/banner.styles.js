import styled from 'styled-components';

export const CenterBox = styled.div`
  display : flex;
  flex-direction : ${ ({theme}) => theme.device === "pc" ? "row" : "column"};
  justify-content : center;
  align-items : center;
  flex : 1;
  max-width : 800px;
  margin : auto;
`

export const PhotoContainer = styled.div`
  padding : 10px;
`

export const ImageContainer = styled.div`
  width : 250px;
  display : flex;
  justify-content : center;
  padding-top :  ${({ theme }) => theme.device === "pc" ? "0px" : "100px"};
`

export const Image = styled.img`
  height : 120px;
  margin : ${({ theme }) => theme.device === "pc" ? "0px auto 0px 0px" : "0px auto 20px auto"};
  padding-right :${({ theme }) => theme.device === "pc" ? "40px" : "0px"};
`

export const H2 = styled.h2`
  text-align : ${({ theme }) => theme.device === "pc" ? "left" : "center"};
  color:#C5B7B8;
  font-weight: bolder;
  font-size: 30px;
  margin : 0;
  line-height: 1.1;
`

export const H3 = styled.h3`
  text-align :${({ theme }) => theme.device === "pc" ? "left" : "center"};
  color:#fff;
  font-weight: bolder;
  font-size: 2.5em;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
`

export const Name = styled.strong`
  color:#F1E9F2;
  font-size:1.2em;
  font-weight:800;
`

export const P = styled.p`
    text-align : ${({ theme }) => theme.device === "pc" ? "left" : "center"};
    color:#F1E9F2;
    font-size : 0.9em;
    line-height: 1.42857143;
    padding : 0px 10px 0px 10px;
`
