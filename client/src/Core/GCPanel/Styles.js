import styled from 'styled-components';
import {
  minSize, sizeBreakpoints, zIndex, color,
} from '../../assets/baseStyles';
import Minimize from '../../components/Minimize';
import Stepper from '../../components/Stepper';
import { UserPic } from '../../components/Userpic';
import StepperArrow from '../../assets/stepperarrow.svg';

const DesignBased = {
  wrapper: {
    width: 220,
    minimalWidth: 55,
  },
  user: {
    name: 9,
    status: 6,
    margin: 5,
  },
  groups: {
    width: 187,
    height: 327,
    fontTitle: 13,
    fontEmpty: 12,
    margin: 33,
    marginTitle: 10,
    marginContent: 30,
    pTitle: 26,
  },
  footer: {
    font: 13,
    margin: 12,
  },
};

export const StyledGCPanelWrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${zIndex.sidePanel};
  background-color: ${color.light};
  font-family: Inter,sans-serif;
  border: 1px solid ${color.medium};
  width: ${({ minimized }) => (minimized ? DesignBased.wrapper.minimalWidth : DesignBased.wrapper.width)}px;
  @media only screen and ${minSize.laptop}{
    width: ${({ minimized }) => (minimized ? DesignBased.wrapper.minimalWidth : DesignBased.wrapper.width) / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${({ minimized }) => (minimized ? DesignBased.wrapper.minimalWidth : DesignBased.wrapper.width) / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelMinimize = styled(Minimize)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const StyledGCPanelUser = styled.div`
  position: relative;
  width: max-content;
  margin-left: ${3 * DesignBased.user.margin}px;
  margin-top: ${2 * DesignBased.user.margin}px;
  @media only screen and ${minSize.laptop}{
    margin-left: ${(3 * DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-top: ${(2 * DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    margin-left: ${(3 * DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-top: ${(2 * DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelUserData = styled.div`
  min-width: max-content;
  display: inline-block;
  position: absolute;
  top: 10%;
  margin-left: ${DesignBased.user.margin}px;
  @media only screen and ${minSize.laptop}{
    margin-left: ${(DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    margin-left: ${(DesignBased.user.margin) / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelUserPic = styled(UserPic)`
  display: inline-block;
`;

export const StyledGCPanelUserName = styled.span`
  font-weight: 500;
  display: block;
  font-size: ${DesignBased.user.name}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.user.name / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.user.name / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelUserStatus = styled.span`
  font-weight: 200;
  display: block;
  font-size: ${DesignBased.user.status}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.user.status / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.user.status / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanel = styled.div`
  font-weight: 500;
  font-size: ${DesignBased.groups.fontTitle};
  margin-top: ${DesignBased.groups.margin}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.groups.fontTitle / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-top: ${DesignBased.groups.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.groups.fontTitle / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-top: ${DesignBased.groups.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;;
  }
`;

export const StyledGCPanelTitle = styled.span`
  font-weight: 500;
  font-size: ${DesignBased.groups.fontTitle}px;
  margin-left: ${DesignBased.groups.pTitle}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.groups.fontTitle / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-left: ${DesignBased.groups.pTitle / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.groups.fontTitle / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-left: ${DesignBased.groups.pTitle / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelContent = styled.div`
  background-color: white;
  border-radius: 3px;
  margin-right: auto;
  margin-left: auto;
  width: ${DesignBased.groups.width}px;
  height: ${DesignBased.groups.height}px;
  margin-top: ${DesignBased.groups.marginTitle}px;
  @media only screen and ${minSize.laptop}{
    width: ${DesignBased.groups.width / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    height: ${DesignBased.groups.height / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-top: ${DesignBased.groups.marginTitle / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    width: ${DesignBased.groups.width / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    height: ${DesignBased.groups.height / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-top: ${DesignBased.groups.marginTitle / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    border-radius: 6px;
  }
`;

export const StyledGCPanelEmpty = styled(StyledGCPanelContent)`
  background-image: url(${StepperArrow});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const StyledGCPanelEmptyTitle = styled.div`
  height: 100%;
  text-align: center;
  font-weight: 400;
  color: ${color.darkest};
  display:flex;
  justify-content:center;
  align-items:center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: ${DesignBased.groups.fontEmpty}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.groups.fontEmpty / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.groups.fontEmpty / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelGroups = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${DesignBased.groups.marginContent}px;
  @media only screen and ${minSize.laptop}{
    padding-top: ${DesignBased.groups.marginContent / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    padding-top: ${DesignBased.groups.marginContent / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
`;

export const StyledGCPanelAbsWrapper = styled.div`
  position: relative;
`;

export const StyledGCPanelStepper = styled(Stepper)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const StyledGCPanelFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const StyledGCPanelFooterElement = styled.a`
  font-weight: 500;
  text-decoration: none;
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-size: ${DesignBased.footer.font}px;
  margin-bottom: ${DesignBased.footer.margin}px;
  @media only screen and ${minSize.laptop}{
    font-size: ${DesignBased.footer.font / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
    margin-bottom: ${DesignBased.footer.margin / (sizeBreakpoints.design / sizeBreakpoints.laptop)}px;
  }
  @media only screen and ${minSize.desktop}{
    font-size: ${DesignBased.footer.font / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
    margin-bottom: ${DesignBased.footer.margin / (sizeBreakpoints.design / sizeBreakpoints.desktop)}px;
  }
  :link {
    color: black;
  }
  :visited {
    color: black;
  }
  :hover {
    color: ${color.darkest};
  }
`;
