import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props), // change this to match theme
    borderRadius: 'md',
    borderWidth: '1px',
    borderColor: 'gray.300',
  };
}
const defaultProps = {
  shadow: 1,
};
export default {
  defaultProps,
  baseStyle,
};

export const MenuGroup = {
  baseStyle: {
    fontSize: 14,
    fontWeight: 'semibold',
    p: 2,
  },
};
export const MenuItem = {
  baseStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    maxWidth: 64,
    minWidth: 32,
    py: 2,
    px: 3,
  },
  defaultProps: {
    isDisabled: false,
    disabledTextColor: '#bdbdbd', // change this to match theme
    underlayColor: '#E8EDFB',
    _disabled: {
      bg: 'gray.100',
      color: 'gray.500',
      underlayColor: '#f4f4f5',
    },
  },
};