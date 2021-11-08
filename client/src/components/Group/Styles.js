import styled from 'styled-components';
import { minSize, sizeBreakpoints, color } from '../../assets/baseStyles';

const DesignBased = {
  width: 175,
  height: 58,
  nameSize: 9,
  counterSize: 10,
  counterDiv: 16,
  errorSize: 6,
  margin: 10,
};

export const StyledGroupWrapper = styled.div`
  position: relative;
  font-weight: 300;
  font-family: Inter, sans-serif;
  font-size: ${DesignBased.nameSize}px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 3px;
  border: 0.5px solid ${color.medium};
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  margin-bottom: ${DesignBased.margin}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.nameSize / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-bottom: ${DesignBased.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.nameSize / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-bottom: ${DesignBased.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px;
  }
  background-color: ${(props) => (props.selected ? color.light : color.white)};
`;

export const StyledGroupCounter = styled.div`
  position: absolute;
  top: 6%;
  right: 3%;
  padding: 0 5px 0 5px;
  text-align: center;
  font-size: ${DesignBased.counterSize}px;
  line-height: ${DesignBased.counterDiv}px;
  background-color: ${color.medium};
  border-radius: 3px;
  min-width: ${DesignBased.counterDiv - 10}px;
  height: ${DesignBased.counterDiv}px;
  @media only screen and ${minSize.laptop}{
    min-width: ${(DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.laptop) - 10)}px;
    height: ${DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.counterSize / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    line-height: ${DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    min-width: ${(DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.desktop) - 10)}px;
    height: ${DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.counterSize / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    line-height: ${DesignBased.counterDiv / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px;
  }
`;

export const StyledDragBar = styled.div`
  position: absolute;
  width: 80%;
  height: 3px;
  background-color: ${color.medium};
  border-radius: 5px;
  bottom: 6%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
`;

export const StyledGroupName = styled.span`
  position: absolute;
  top: 24%;
  left: 5%;
  max-width: 50%;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;
  color: black;
`;

export const StyledError = styled.span`
  position: absolute;
  bottom: 12%;
  font-weight: 200;
  text-align: center;
  width: 100%;
  font-size: ${DesignBased.errorSize}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.errorSize / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.errorSize / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;
