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
