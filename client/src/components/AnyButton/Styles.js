import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';

const DesignBased = {
  width: 64,
  height: 21,
  font: 10,
};

const Buttons = styled.button`
  font-weight: 500;
  font-family: Inter, sans-serif;
  font-size: ${DesignBased.font}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  box-sizing: border-box;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  @media only screen and ${minSize.mobile}{
    border-width: 1px;
    border-radius: 4px;
  }
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-width: 2px;
    border-radius: 6px;
  }
  color: ${({ active }) => (!active ? 'black' : 'white')};
  border: solid ${({ fill, inline }) => (inline ? fill || color.dark : color.dark)};
  background: ${({ fill, active, inline }) => { if (active) { return !inline ? color.dark : fill || color.dark; } if (inline) { return 'transparent'; } return color.light; }};
  &:hover {
    background: ${({ inline, fill }) => (!inline ? color.dark : fill || color.dark)};
    color: white;
  }
`;

export default Buttons;
