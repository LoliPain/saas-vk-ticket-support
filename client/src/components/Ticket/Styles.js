import styled from 'styled-components';
import { minSize, sizeBreakpoints, color } from '../../assets/baseStyles';

const DesignBased = {
  width: 165,
  height: 63,
  font: 7,
};

export const StyledTicketWrapper = styled.div`
  position: relative;
  cursor: ${(props) => (props.selected ? 'auto' : 'pointer')};
  font-family: Inter, sans-serif;
  font-size: ${DesignBased.font}px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 0.5px solid ${color.dark};
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
    border-radius: 6px;
  }
  background-color: ${(props) => (props.selected ? color.light : color.white)};
  img {
    position: absolute;
    right: 3%;
    bottom: 0;
  }
  :hover {
    background-color: ${color.light};
  }
`;

export const StyledTicketPreview = styled.span`
  position: absolute;
  font-weight: 300;
  top: 24%;
  left: 5%;
  max-width: 75%;
  max-height: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; 
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  color: black;
`;

export const StyledTicketCode = styled.span`
  position: absolute;
  bottom: 6%;
  left: 5%;
  font-weight: 200;
  width: 100%;
  font-size: ${DesignBased.font}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;
