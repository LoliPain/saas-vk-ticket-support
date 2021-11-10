import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';
import Ico from './Minimize.svg';

const DesignBased = {
  width: 20,
  height: 20,
};

export const StyledMinimize = styled.button`
  cursor: pointer;
  border: 1px solid ${color.dark};
  box-sizing: border-box;
  padding: 0;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
  background: white;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  border-radius: 3px;
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
    background: ${color.light};
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  }
`;

export const StyledIco = styled(Ico)`
  display: block;
  margin: auto;
  ${(props) => (props.minimized ? 'transform: rotate(180deg);' : '')}
`;
