import styled from 'styled-components';

export const sizeBreakpoints = {
  mobile: 320,
  design: 1152,
  laptop: 1366,
  desktop: 1920,
};

export const minSize = {
  mobile: `(min-width: ${sizeBreakpoints.mobile}px)`,
  laptop: `(min-width: ${sizeBreakpoints.laptop}px)`,
  desktop: `(min-width: ${sizeBreakpoints.desktop}px)`,
};

export const color = {
  white: 'white',
  darkest: '#B2B2B2',
  dark: '#C4C4C4',
  medium: '#E5E5E5',
  light: '#F4F5F7',
  disabled: '#BFBFBF',
  responded: '#17E0B0',
  created: '#17B0E0',
  loved: '#FFA4DA',
  rejected: '#E01717',
  respondedLight: '#C5F7EB',
  createdLight: '#C5EBF7',
  lovedLight: '#FFE8F6',
  rejectedLight: '#F7C5C5',
};

export const zIndex = {
  modal: 1000,
  sidePanel: 100,
};

export const BaseModalBG = styled.div`
  position: fixed; 
  z-index: ${zIndex.modal}; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
  background-color: rgba(186, 186, 186, 0.5);  
`;

export const BaseModalBox = ({ width, height }) => styled.div`
  background-color: white;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));
  width: ${width}px;
  height: ${height}px;
  margin: 15% auto;
  border-radius: 10px;
  @media only screen and ${minSize.laptop}{
    width: ${width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 15px;
  }
`;

export const BaseModalTitle = ({ title }) => styled.p`
  font-family: Inter,sans-serif;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding-top: ${title.padding}px;
  font-size: ${title.font}px;
  @media only screen and ${minSize.laptop}{
    padding-top: ${title.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${title.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding-top: ${title.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${title.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const BaseModalFooter = ({ footer }) => styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 50%;
  bottom: 0;
  right: 0;
  padding: ${footer.padding}px;
  @media only screen and ${minSize.laptop}{
    padding: ${footer.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding: ${footer.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;
