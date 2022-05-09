import styled from 'styled-components';
import * as SharedStyle from './shared.style';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ConatinerBody = styled.div`
   background-color: ${(props) => props.bg};
`;

export const CategoryName = styled.div`
  ${SharedStyle.FontFamily};
  font-size: 42px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0px;
  height: 68px;
  width: 299px;
  margin-top: 40px;
`;
