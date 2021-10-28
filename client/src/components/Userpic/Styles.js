import styled from 'styled-components';
import { color, minSize, sizeBreakpoints } from '../../assets/baseStyles';

const DesignBased = {
  width: 22,
  height: 22,
};

export const StyledPicWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid white;
  margin: 1px;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-width: 2px;
  }
`;

export const StyledPic = styled.img`
  border-radius: 50%;
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
  border: ${(props) => (props.minimal ? `${color.dark} 0.5px solid` : '0')}
`;
