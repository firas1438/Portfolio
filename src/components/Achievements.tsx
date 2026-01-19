import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// achievements data
const achievements = [
  {
    title: '1st Place – IT Impact Hackathon',
    organizer: 'ARSII',
    location: 'ISIMM, Monastir',
    description: 'AI healthcare platform with medication safety checks via image recognition and personalized medical advice.',
    tags: ['Web Development', 'Gen AI', 'Computer Vision'],
    poster: 'https://i.imgur.com/CqBlg3k.jpeg',
  },
  {
    title: '1st Place – Intern Explorer Hackathon',
    organizer: 'CPU Club',
    location: 'ISIMM, Monastir',
    description: 'Built a professional website for a growing tech company to establish their online presence.',
    tags: ['Web Development', '3D'],
    poster: 'https://i.imgur.com/dOylQLb.jpeg',
  },
  {
    title: '2nd Place – AI 4 Tourism Hackathon',
    organizer: 'ARSII',
    location: 'American Corner, Sousse',
    description: 'AI-powered travel assistant with monument recognition, voice narration, and smart trip planning features.',
    tags: ['Web Development', 'Deep Learning', 'TTS'],
    poster: 'https://i.imgur.com/J8Yertx.jpeg',
  },
  {
    title: '3rd Place – AI Wave Hackathon',
    organizer: 'GDG Sousse',
    location: 'EPI, Sousse',
    description: 'Mental wellness platform with AI chat, mood analysis via facial recognition, and meditation features.',
    tags: ['Web Development', 'Gen AI', 'Computer Vision'],
    poster: 'https://i.imgur.com/ttAaJcL.jpeg',
  },

];

export default function Achievements() {
  return (
    <Container id="achievements" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, }} >
      
      {/* header */}
      <Box sx={{ maxWidth: 700, textAlign: 'center', }} >
        <Typography variant="h4" gutterBottom>
          Achievements
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A showcase of my accomplishments and milestones in my professional journey.
        </Typography>
      </Box>

      {/* grid */}
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', }, gap: 3, }} >
        
        {achievements.map((achievement, index) => (
          <Card key={index} sx={{ 
            height: '100%', borderRadius: 3, transition: 'transform 0.3s ease', 
            '&:hover': { transform: 'translateY(-6px)' }, 
            position: 'relative', overflow: 'hidden',
            '&::before': {
              content: '""', position: 'absolute', top: 0, right: 0, width: '55%', height: '100%',
              backgroundImage: `url(${achievement.poster})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: 0.2, pointerEvents: 'none', filter: 'blur(2px)', 
              maskImage: 'linear-gradient(to left, black 10%, transparent 100%)',
            }
          }} >
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.5, color: '#415ce0' }} >
                {achievement.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Organized by {achievement.organizer} • {achievement.location}
              </Typography>

              <Typography variant="body2" sx={{ mb: 1.5 }}>
                {achievement.description}
              </Typography>

              <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
                {achievement.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Stack>

            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}