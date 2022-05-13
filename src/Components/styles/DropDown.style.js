import styled, { css } from 'styled-components';
import * as SharedStyle from './shared.style';

const Price = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
`;

const Footer = css`
  width: 152.5px;
  height: 33px;
  padding-top: 15px;
  margin-bottom: 10px;
`;

export const DropDownItems = styled.div`
  ${SharedStyle.Display};
  margin: 10px 0 20px 0;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  div{
    ${SharedStyle.FontFamily};
    ${Price};
  }
  span {
    ${SharedStyle.FontFamily};
    ${Price};
    padding-top: 2px;
  }
`;

export const Color = styled.button`
  background-color: ${(props) => props.color};
  width: 16px;
  height: 16px;
  margin-top: 2px;
  border: ${(props) => props.border}
`;

export const OtherAttribute = styled.button`
  width: 45px;
  height: 24px;
  background: ${(props) => props.bg};
  border: 1px solid #1D1F22;
  margin: 3px 2px 0 0;
  color: ${(props) => props.color};
`;

export const ItemName = styled.div`
  ${SharedStyle.FontFamily};
  height: 30px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;  
`;

export const Cart = styled.div`
 background-color: grey;
`;

export const Checkout = styled.div`
  ${SharedStyle.Display};
  margin-top: 40px;
`;

export const ViewBag = styled.div`
  ${Footer};
  border: 1px solid black;
  text-align: center;
`;

export const Order = styled.div`
  ${Footer};
  text-align: center;
  background-color: #5ECE7B;
  color: white;
`;

export const Body = styled.div`
  margin: 2px 10px;
`;