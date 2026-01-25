import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InternshipCard from './InternshipCard';
import Title from './Title';
import MotionWrapper from './ui/MotionWrapper';


export default function Experience() {
  return (
    <Container id="experience" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 5 } }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs:'center' }, }} >
        <Title
            title="Experience"
            heading="Professional Journey"
            description="An overview of internships and freelance work where I contributed to real-world projects."
        />
      </Box>

      {/* content */}
      <Grid container spacing={{ xs: 4, sm: 4 }} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%', }}>

        <MotionWrapper variant='slideRight' delay={0.3}>
          <InternshipCard
            logo="https://i.imgur.com/QBi0TvM.png"
            company="ConvergeINNOV"
            role="Software Engineering Intern"
            period="Jun 2025 – Jul 2025"
            description="Built Next.js dashboards, integrated REST APIs, and improved the startup's visibility."
          />
        </MotionWrapper>

        <MotionWrapper variant='slideLeft' delay={0.3}>
          <InternshipCard
            logo="https://i.imgur.com/law0oi0.png"
            company="Freelance"
            role="Fullstack Developer"
            period="2024 – Present"
            description="Delivered modern, maintainable software solutions for multiple clients."
          />
        </MotionWrapper>

      </Grid>
      
    </Container>
  );
}
