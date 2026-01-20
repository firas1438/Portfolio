import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MacbookScroll } from './MacbookScroll';


export default function Hero() {
  return (
    <Box id="about" sx={(theme) => ({ width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)', ...theme.applyStyles('dark', { backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(219, 100%, 16%), transparent)', }), })} >
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 18, sm: 20 }, pb: { xs: 8, sm: 12 }, }} >
        
        {/* header */}
        <Stack spacing={2} useFlexGap sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }} >
          <Typography variant="h1" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', fontSize: 'clamp(3rem, 10vw, 3.5rem)', }} >
            Hi,&nbsp;I&apos;m&nbsp;
            <Typography component="span" variant="h1" sx={(theme) => ({ fontSize: 'inherit', color: '#415ce0', ...theme.applyStyles('dark', { color: '#415ce0', }), })} >
              Firas Ben Ali
            </Typography>
          </Typography>
          <Typography sx={{ textAlign: 'center', color: 'text.secondary', width: { sm: '100%'}, }} >
            I build modern software solutions with a strong focus on user experience. 
            With 2+ years working across different technologies, 
            I help startups launch fast, keep code maintainable, 
            and deliver great product experiences.
          </Typography>

          <Stack direction={{ xs: 'row' }} spacing={1.5} useFlexGap sx={{ pt: 1 }} >
            <Button variant="contained" color="primary" size="medium" href="#projects" >
              View Projects
            </Button>

            {/* <Button variant="outlined" color="primary" size="medium" href="/CV_FirasBenAli.pdf" download="FirasBenAli_Resume.pdf" >
              Download Resume
            </Button> */}

            <Button variant="outlined" color="primary" size="medium" href="/CV_FirasBenAli.pdf" target="_blank" rel="noopener noreferrer" >
              Download Resume
            </Button>
          </Stack>
          
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', pt: 1.5 }} >
            Interested in internships, freelance work, or collaboration?{' '}
            <Link href="#contact" color="primary">
              Let&apos;s connect
            </Link>
            .
          </Typography>
        </Stack>

        {/* image */}
        <MacbookScroll src={`https://i.imgur.com/22ymOVK.png`} />

      </Container>
    </Box>
  );
}
