import {
  BaseModalBox,
  BaseModalFooter,
  BaseModalTitle,
} from '../../assets/baseStyles';

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

export const LogoutModalBox = BaseModalBox(DesignBased);

export const LogoutModalTitle = BaseModalTitle(DesignBased);

export const LogoutModalFooter = BaseModalFooter(DesignBased);
