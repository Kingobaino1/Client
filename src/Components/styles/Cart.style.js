import styled from 'styled-components';
import * as SharedStyle from './shared.style';

export const CartName = styled.div`
  ${SharedStyle.FontFamily};
  font-weight: 600;
  height: 30px;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 20px;
`;

export const AttributeName = styled.div`
font-family: 'Roboto Condensed';
${SharedStyle.FontWeight};
font-size: 18px;
line-height: 18px;
margin-top: 10px;
`;

export const ColorAttribute = styled.button`
  background-color: ${(props) => props.color};
  width: 32px;
  height: 32px;
  margin-top: 2px;
  border: ${(props) => props.border}
`;

export const OtherAttribute = styled.button`
  width: 63px;
  height: 45px;
  background: ${(props) => props.bg};
  color:${(props) => props.color};
  border: 1px solid #1D1F22;
  margin: 3px 4px 0 0
`;

export const ImageStyle = styled.div`
  background-image: ${(props) => props.url};
  background-position: center;
  background-size: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const CartFooter = styled.div`
  margin-top: 40px;
`;

export const Order = styled.div`
  height: 43px;
  width: 300px;
  margin-top: 16px;
  background-color: #5ECE7B;
  text-align: center;
  lineHeight: 19.2px;
  padding-top: 21.5px;
  color: #fff;
`;

export const CartContainer = styled.div`
  margin-top: 40px;
`;

export const CartTitle = styled.div`
  display: ${(props) => props.display};
  width: 84px;
  height: 40px;
  ${SharedStyle.FontFamily};
  ${SharedStyle.FontWeight};
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
`;

export const SmlScreen = styled.div`
  display: flex;
  margin: 5px 10px;
  div {
    font-weight: bold;
  }
  div {
    font-weight: lighter;
  }
`

export const Total = styled.div`
  display: ${(props) => props.hideTotal};
  div {
    ${SharedStyle.Display};
  }
`;

export const Hide = styled.div`
 display: ${(props) => props.hide}
`;

export const HiddenCart = styled.div`
  display: ${(props) => props.display};
  width: 335px;
  position: absolute;
  right: 80px;
  top: 90px;
  // height: 677px;
`;

export const CartBody = styled.div`
  ${SharedStyle.Display}
  width: 100%;
  margin: 40px 0 20px 0;
`;

export const PlusMinus = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #1D1F22;
`;

export const PM = styled.div`
  position: relative;
  top: 12px;
  right: -15px;
`;

export const ChangeCartImage = styled.div`
  position: relative;
  display: ${(props) => props.display};
  bottom: -175px;
  left: 120px;
  width: 60px;
`;

export const NextPrevImageIcon = styled.div`
  ${SharedStyle.Display};
  width: 100%;
`;

export const Count = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-align: center;
  position: relative;
  left: -10px;
  top: 9px;
  font-size: small;
  font-weight: bold;
`;

