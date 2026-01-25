import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../theme/ColorModeIconDropdown';
import PortfolioIcon from '../PortfolioIcon';
import MotionWrapper from '../ui/MotionWrapper';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 'calc(var(--template-frame-height, 0px) + 24px)' }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <MotionWrapper variant="blurIn">
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <PortfolioIcon />
              </a>
            </Box>
          </MotionWrapper>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {[
                { label: 'About', href: '#about' },
                { label: 'Education', href: '#education' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <MotionWrapper key={item.label} variant="blurIn" delay={0.1 + index * 0.05} className="flex">
                  <Button variant="text" href={item.href} color="info" size="small">{item.label}</Button>
                </MotionWrapper>
              ))}
            </Box>
            <MotionWrapper variant='blurIn' delay={0.55}>
              <ColorModeIconDropdown />
            </MotionWrapper>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <MotionWrapper variant="blurIn">
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            </MotionWrapper>
            
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}>
              <Box sx={{ p: 3, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}><CloseRoundedIcon /></IconButton>
                </Box>
                {['About','Education','Experience','Skills','Projects','Achievements','FAQ','Contact'].map((item) => (
                  <MenuItem key={item} component="a" href={`#${item.toLowerCase()}`} onClick={toggleDrawer(false)}>{item}</MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
