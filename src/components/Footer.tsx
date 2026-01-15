import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PortfolioIcon from './PortfolioIcon';

export default function Footer() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 4, sm: 8 }, py: { xs: 6, sm: 4 }, textAlign: { xs: 'center', sm: 'left' }, }} >
      
      {/* top section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', justifyContent: 'space-between', mt: { sm: 2 }, gap: { xs: 5, sm: 2 } }} >
        
        {/* socials */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, gap: 2, minWidth: { md: '40%' }, }} >
          <Box sx={{ width: { xs: '100%', sm: 'fit-content' } }}>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <PortfolioIcon />
            </a>
            <Typography variant="body2" fontWeight={600} mt={2} mb={1}>
              Thank you for visiting my personal portfolio website.
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Feel free to connect with me over socials!
            </Typography>
            <Stack direction="row" spacing={1} sx={{ color: 'text.secondary', justifyContent: { xs: 'center', sm: 'flex-start' }, ml: { xs: 0, sm: -1 } }} >
              <IconButton color="inherit" href="https://github.com/firas1438" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/in/firasbenali/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* quick links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'center' } }} >
          <Typography variant="body2" fontWeight="bold" sx={{ mb: 3 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, columnGap: 4 }} >
            <Link color="text.secondary" href="#about">About</Link>
            <Link color="text.secondary" href="#projects">Projects</Link>
            <Link color="text.secondary" href="#education">Education</Link>
            <Link color="text.secondary" href="#achievements">Achievements</Link>
            <Link color="text.secondary" href="#experience">Experience</Link>
            <Link color="text.secondary" href="#faq">FAQ</Link>
            <Link color="text.secondary" href="#skills">Skills</Link>
            <Link color="text.secondary" href="#contact">Contact</Link>
          </Box>
        </Box>

        {/* contact info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }} >
          <Typography variant="body2" fontWeight="bold" sx={{ mb: 3 }}>
            Contact Info
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <PhoneIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">+216 22 047 988</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <EmailIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">benalifiras1438@gmail.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">Tunisia, 4000</Typography>
            </Stack>
          </Box>
        </Box>
        
      </Box>

      {/* bottom section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: { xs: 4, sm: 4 }, width: '100%', borderTop: '1px solid', borderColor: 'divider' }} >
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '} {new Date().getFullYear()} &nbsp;Personal Portfolio. All rights reserved.
        </Typography>
      </Box>

    </Container>
  );
}