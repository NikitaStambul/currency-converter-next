import { Button, styled } from '@mui/material';

const GradientButton = styled(Button)(({ theme }) => ({
  padding: '8px 48px',
  color: '#ffffff',
  textTransform: 'none',
  gap: '10px',
  borderRadius: 40,
  fontWeight: 600,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

export default GradientButton;