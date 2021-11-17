import styled from 'styled-components';
import { minSize, sizeBreakpoints } from '../../assets/baseStyles';

const DesignBased = {
  statusWidth: 42,
  statusHeight: 8,
};

const StatusDiv = styled.div`
  top: 6%;
  left: 3%;
  position: absolute;
  border-radius: 3px;
  width: ${DesignBased.statusWidth}px;
  height: ${DesignBased.statusHeight}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.statusWidth / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.statusHeight / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.statusWidth / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.statusHeight / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 4px;
  }
  background-color: ${({ status }) => status}; 
`;

export default StatusDiv;
