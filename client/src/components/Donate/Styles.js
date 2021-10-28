import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';
import Ico from './Donate.svg';

const DesignBased = {
  width: 118,
  height: 33,
  font: 13,
};

export const StyledDonate = styled.button`
  font-weight: 400;
  font-family: Inter, sans-serif;
  font-size: ${DesignBased.font}px;
  color: ${color.darkest};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 6px;
  border: 0;
  background: transparent;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
  &:hover {
    background: ${color.light};
  }
`;

export const StyledWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledIco = styled(Ico)`
  display: inline-flex;
  height: 16px;
  padding-right: 4px;
`;
