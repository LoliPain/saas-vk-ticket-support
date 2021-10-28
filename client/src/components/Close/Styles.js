import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';
import Ico from './Close.svg';

const DesignBased = {
  width: 20,
  height: 20,
};

export const StyledClose = styled.button`
  cursor: pointer;
  border: 1px solid ${color.medium};
  path {
    fill: ${color.medium};
  }
  box-sizing: border-box;
  padding: 0;
  background: white;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  border-radius: 3px;
  @media only screen and ${minSize.mobile}{
    width: ${DesignBased.width}px;
    height: ${DesignBased.height}px;
  }
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px;
  }
  &:hover {
    path {
      fill: ${color.darkest};
    }
    border: 1px solid ${color.darkest};
  }
`;

export const StyledIco = styled(Ico)`
  display: block;
  margin: auto;
`;
