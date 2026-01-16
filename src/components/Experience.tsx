import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InternshipCard from './InternshipCard';


export default function Experience() {
  return (
    <Container id="experience" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 }, }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs:'center' }, }} >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }} >
          Experience
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          A summary of my professional journey, highlighting my internships and freelance projects 
          where I've applied my technical skills to solve real-world problems.
        </Typography>
      </Box>

      {/* content */}
      <Grid container rowSpacing={{ xs: 4, sm: 4 }} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%', }}>

        <InternshipCard
          logo="https://i.imgur.com/jPfRAJC.png"
          company="ConvergeINNOV"
          color="#c269bc"
          role="Software Engineering Intern"
          period="Jun 2025 – Jul 2025"
          description="Built Next.js dashboards, integrated REST APIs, and improved the startup's visibility."
        />

        <InternshipCard
          logo="https://i.imgur.com/fietHtg.png"
          company="Freelance"
          color="#6fdb44"
          role="Fullstack Developer"
          period="2024 – Present"
          description="Delivered modern, maintainable software solutions for multiple clients."
        />

      </Grid>
    </Container>
  );
}
