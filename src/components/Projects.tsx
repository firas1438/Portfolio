import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Container id="projects" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 5 }, }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: 'center' }}>
        <Typography component="h2" variant="h4" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A showcase of my personal and collaborative projects.
        </Typography>
      </Box>

      {/* content */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" >
        
        {/* movienest */}
        <ProjectCard
          image="https://i.imgur.com/5KWKAVN.png"
          title="MovieNest"
          description="A platform for streaming, discovering, and enjoying movies and shows across different genres."
          tags={['Next.js', 'Supabase', 'Zustand', 'Docker']}
          githubUrl="https://github.com/firas1438/MovieNest"
          liveUrl="https://themovienest.vercel.app/"
        />

        {/* tunitales */}
        <ProjectCard
          image="https://i.imgur.com/zbiJx5j.png"
          title="TuniTales"
          description="A platform that makes exploring Tunisia's cultural heritage fun, interactive, and personalized via AI."
          tags={['React', 'FastAPI', 'AI', 'Computer Vision']}
          githubUrl="https://github.com/Islem-Chammakhi/TuniTales"
          liveUrl="https://drive.google.com/file/d/1xiL7k3d7-w0yAFbiE2fsUIy83xwre6wr/view"
        />

        {/* daymark */}
        <ProjectCard
          image="https://i.imgur.com/KNNk7kx.png"
          title="Daymark"
          description="A Chrome extension that tracks all public holidays of any country within the current calendar year."
          tags={['React', 'RapidAPI', 'Tailwind', 'Framer Motion']}
          githubUrl="https://github.com/firas1438/Daymark"
        />

        {/* blognest */}
        <ProjectCard
          image="https://i.imgur.com/Ixb8SjU.png"
          title="Blognest"
          description="A platform for writing, publishing, and reading blog posts and articles across a variety of topics."
          tags={['Next.js', 'Tanstack Query', 'React Markdown']}
          githubUrl="https://github.com/firas1438/BlogNest"
          liveUrl="https://theblognest.vercel.app/"
        />

        {/* convergeinnov */}
        <ProjectCard
          image="https://i.imgur.com/8P5SgTr.png"
          title="ConvergeINNOV"
          description="Official website for a growing startup, featuring an admin dashboard for real-time content updates."
          tags={['Next.js', 'NextAuth', 'MongoDB', 'Upstash Redis']}
          githubUrl="https://github.com/firas1438/ConvergeINNOV"
          liveUrl="https://convergeinnov.vercel.app/"
        />

      </Grid>
    </Container>
  );
}
