import styled from 'styled-components';
import { minSize, sizeBreakpoints, zIndex } from '../../assets/baseStyles';

const DesignBased = {
  width: 300,
  height: 94,
  title: {
    font: 13,
    padding: 15,
  },
  footer: {
    padding: 10,
  },
};

export const LogoutModalBG = styled.div`
  position: fixed; 
  z-index: ${zIndex.modal}; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
  background-color: rgba(186, 186, 186, 0.5);  
`;

export const LogoutModalBox = styled.div`
  background-color: white;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
  width: ${DesignBased.width}px;
  height: ${DesignBased.height}px;
  margin: 20% auto;
  border-radius: 10px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin: ${DesignBased.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px auto;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin: ${DesignBased.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px auto;
    border-radius: 15px;
  }
`;

export const LogoutModalTitle = styled.p`
  font-family: Inter,sans-serif;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding-top: ${DesignBased.footer.padding}px;
  font-size: ${DesignBased.title.font}px;
  @media only screen and ${minSize.laptop}{
    padding-top: ${DesignBased.title.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.title.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding-top: ${DesignBased.title.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.title.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const LogoutModalFooter = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 50%;
  bottom: 0;
  right: 0;
  padding: ${DesignBased.footer.padding}px;
  @media only screen and ${minSize.laptop}{
    padding: ${DesignBased.footer.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding: ${DesignBased.footer.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;
