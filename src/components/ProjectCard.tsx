import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({ image, title, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card sx={{ maxWidth: 360, height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3,
        transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-6px)' }, }}
    >
      {/* image*/}
      <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 1, '&:hover .image-overlay': { opacity: 1 }, }} >
        
        <Box
          component="img" src={image} alt={title}
          sx={{ display: 'block', width: '100%', height: '200px',
            objectFit: 'cover', transition: 'transform 0.4s ease', }}
        />


        {/* icons */}
        <Box className="image-overlay"
            sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, opacity: 0, borderRadius: 1,
                transition: 'opacity 0.3s ease', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', bgcolor: 'rgba(255,255,255,0.15)', }}
        >
            {/* github icon */}
            <IconButton href={githubUrl} target="_blank" rel="noopener noreferrer" color="primary"
              sx={{ bgcolor: 'action.selected', '&:hover': { bgcolor: 'action.hover' }, border: 'none', }}
            >
                <GitHubIcon fontSize="small" />
            </IconButton>

            {/* demo icon */}
            {liveUrl && (
                <IconButton href={liveUrl} target="_blank" rel="noopener noreferrer" color="primary"
                  sx={{ bgcolor: 'action.selected', '&:hover': { bgcolor: 'action.hover' }, border: 'none', }}
                >
                    <LaunchIcon fontSize="small" />
                </IconButton>
            )}

        </Box>
        
      </Box>

      {/* content */}
      <CardContent sx={{ px: 0.5,flexGrow: 1, '&:last-child': { pb: 1 } }} >

        <Typography variant="subtitle2" sx={{ fontSize: '0.9375rem', textTransform: "uppercase", letterSpacing: "0.05em",  fontWeight: 600, mb:1 }} >
            {title}
        </Typography>
        
        {/* description */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {/* tags */}
        <Stack direction="row" spacing={0.5} useFlexGap flexWrap="wrap">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>
      </CardContent>

    </Card>
  );
}
