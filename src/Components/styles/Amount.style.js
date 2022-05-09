import styled, { css } from 'styled-components';
import * as SharedStyle from './shared.style';

const fontSIze = css`
  font-size: 24px;
  line-height: 18px;
`;

export const AmountStyled = styled.div`
  display: flex;
  flex-direction: row;
  div{
    ${SharedStyle.FontFamily};
    ${SharedStyle.FontWeight};
    ${fontSIze};
  }
  span {
    ${SharedStyle.FontFamily};
    ${SharedStyle.FontWeight};
    ${fontSIze};
    padding-top: 2px;
  }
`;
