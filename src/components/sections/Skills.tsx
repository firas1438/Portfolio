import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TechStack from '../TechStack';
import Title from '../Title';
import MotionWrapper from '../ui/MotionWrapper';


export default function Skills() {
  return (
    <Container id="skills" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 5 } }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs:'center' }, }} >
        <Title
            title="Technical Skills"
            heading="Tools & Technologies"
            description="A list of programming languages, frameworks, and tools I work with to build modern software solutions."
        />
      </Box>

      {/* content */}
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} >
        <MotionWrapper variant='slideUp' delay={0.3}>
          <TechStack />
        </MotionWrapper>
      </Grid>
    </Container>
  );
}
