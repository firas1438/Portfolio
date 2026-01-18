import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CodeSnippet from './CodeSnippet';


export default function Achievements() {
  return (
    <Container id="achievements" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 5 } }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs:'center' }, }} >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }} >
          Achievements
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Quickly build an effective Achievements table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>

      {/* content */}
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} >
        {/* <CodeSnippet/> */}
      </Grid>
    </Container>
  );
}
