import styled from 'styled-components';
import {
  BaseModalBox,
  BaseModalFooter,
  BaseModalTitle,
  color,
  minSize,
  sizeBreakpoints,
} from '../../assets/baseStyles';
import Close from '../../components/Close';

const DesignBased = {
  width: 300,
  height: 260,
  title: {
    font: 14,
    padding: 11,
  },
  close: {
    borderMargin: 10,
  },
  data: {
    font: 24,
    height: 60,
    margin: 18,
  },
  input: {
    top: 18,
    padding: 6,
    height: 25,
    font: {
      top: 10,
      inside: 12,
      padding: 10,
      desc: 9,
    },
  },
  footer: {
    padding: 10,
  },
};

export const GroupModalBox = BaseModalBox(DesignBased);

export const GroupModalTitle = BaseModalTitle(DesignBased);

export const GroupModalClose = styled(Close)`
  position: absolute;
  right: ${DesignBased.close.borderMargin}px;
  top: ${DesignBased.close.borderMargin}px;
  @media only screen and ${minSize.laptop}{
    right: ${DesignBased.close.borderMargin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    top: ${DesignBased.close.borderMargin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    right: ${DesignBased.close.borderMargin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    top: ${DesignBased.close.borderMargin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const GroupModalDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  height: ${DesignBased.data.height}px;
  margin-top: ${DesignBased.data.margin}px;
  margin-bottom: ${DesignBased.data.margin}px;
  @media only screen and ${minSize.laptop}{
    height: ${DesignBased.data.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-top: ${DesignBased.data.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-bottom: ${DesignBased.data.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    height: ${DesignBased.data.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-top: ${DesignBased.data.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-bottom: ${DesignBased.data.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const GroupModalDataName = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: ${DesignBased.data.font}px;
  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const GroupModalInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  font-family: Inter, sans-serif;
  font-weight: 300;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${DesignBased.input.top}px;
  @media only screen and ${minSize.laptop}{
    margin-top: ${DesignBased.input.top / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    margin-top: ${DesignBased.input.top / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const GroupModalInputName = styled.span`
  color: black;
  padding-left: ${DesignBased.input.font.padding}px;
  font-size: ${DesignBased.input.font.top}px;
  @media only screen and ${minSize.laptop}{
    padding-left: ${DesignBased.input.font.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.input.font.top / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding-left: ${DesignBased.input.font.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.input.font.top / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const GroupModalInputHelp = styled.a`
  margin-left: auto;
  text-decoration: none;
  color: ${color.created};
  font-size: ${DesignBased.input.font.top}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.input.font.top / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.input.font.top / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
  :link {
    color: ${color.created};
  }
  :visited {
    color: ${color.created};
  }
  :hover {
    color: ${color.created};
    text-decoration: underline;
  }
`;

export const GroupModalInput = styled.input`
  flex-basis: 100%;
  margin: 3px 0 1px 0;
  padding: 0 ${DesignBased.input.padding}px 0 ${DesignBased.input.padding}px;
  width: 100%;
  font-weight: 300;
  background-color: ${color.light};
  color: ${color.darkest};
  border: 1px solid ${color.medium};
  height: ${DesignBased.input.height}px;
  font-size: ${DesignBased.input.font.inside}px;
  border-radius: 4px;
  @media only screen and ${minSize.laptop}{
    height: ${DesignBased.input.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    font-size: ${DesignBased.input.font.inside / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    padding-left: ${DesignBased.input.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    padding-right: ${DesignBased.input.padding / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    height: ${DesignBased.input.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    font-size: ${DesignBased.input.font.inside / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    padding-left: ${DesignBased.input.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    padding-right: ${DesignBased.input.padding / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: Inter, sans-serif;
    font-weight: 300;
    color: ${color.darkest};
  }
`;

export const GroupModalInputDesc = styled.span`
  color: ${({ err }) => (err ? color.rejected : color.responded)};
  font-size: ${DesignBased.input.font.desc}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.input.font.desc / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.input.font.desc / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const GroupModalFooter = BaseModalFooter(DesignBased);
