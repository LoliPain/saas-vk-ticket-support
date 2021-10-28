import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';
import Plus from './Plus.svg';
import Minus from './Minus.svg';

const DesignBased = {
  width: 20,
  height: 14,
};

export const StyledIncrease = styled.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 0;
  background: white;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  border-radius: 3px 0 0 3px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px 0 0 6px;
  }
  &:hover {
    background: ${color.dark};
  }
`;

export const StyledDecrease = styled.div`
  ${(props) => (props.minimal ? `background: ${color.dark};` : 'background: white; cursor: pointer;')}
  display: inline-block;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 0;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  border-radius: 0 3px 3px 0;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 0 6px 6px 0;
  }
  margin-left: -1px;
  &:hover {
    background: ${color.dark};
  }
`;

export const StyledStepper = styled.div`
  display: inline-block;
`;

export const StyledPlus = styled(Plus)`
  display: block;
  margin: auto;
`;

export const StyledMinus = styled(Minus)`
  display: block;
  margin: auto;
`;
