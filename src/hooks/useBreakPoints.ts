import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useBreakPoints = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const isUpperMd = useMediaQuery(theme.breakpoints.up('md'));

  return {
    isMobile, isTablet, isDesktop, isUpperMd,
  };
};

export default useBreakPoints;
