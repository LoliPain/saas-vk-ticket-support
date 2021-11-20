import styled from 'styled-components';
import { minSize, sizeBreakpoints } from '../../assets/baseStyles';

const DesignBased = {
  width: 22,
  height: 22,
};

export const PicWrapper = styled.div`
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
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  }
`;

export const Pic = styled.img`
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
`;
