import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

{/* tech stack */}
const techStackData = {
  frameworks: [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    { name: 'Express.js', icon: 'https://i.imgur.com/f2E32Rd.png' },
    { name: 'Springboot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  ],
  languages: [
    { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Java', icon: 'https://i.imgur.com/FqaRTqL.png' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  ],
  databases: [
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'Mongoose', icon: 'https://cdn.simpleicons.org/mongoose/880000' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  ],
};

{/* categories */}
const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Frameworks & Libraries',
    description: 'Modern frameworks and libraries for building scalable applications.',
    category: 'frameworks',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Languages',
    description: 'Programming languages I work with for different types of projects.',
    category: 'languages',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Databases & Tools',
    description: 'Database systems, ORMs, and development tools for efficient workflow.',
    category: 'databases',
  },
];

interface ChipProps { selected?: boolean; }

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background: 'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light, '& .MuiChip-label': { color: 'hsl(0, 0%, 100%)', },
        ...theme.applyStyles('dark', { borderColor: (theme.vars || theme).palette.primary.dark, }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

{/* mobile layout */}
export function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature, }: MobileLayoutProps) {

  if (!items[selectedItemIndex]) {
    return null;
  }

  const currentItems = techStackData[selectedFeature.category as keyof typeof techStackData];

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 2, }} >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip size="medium" key={index} label={title} onClick={() => handleItemClick(index)} selected={selectedItemIndex === index} />
        ))}
      </Box>
      
      <Card variant="outlined">
        <Box sx={{ p: 3 }}>
          <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center" sx={{ mb: 2, minHeight: 200 }} >
            {currentItems.map((tech, index) => (
              <Card 
                key={index} variant="outlined"
                sx={(theme) => ({
                  width: 80, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 1.5, borderRadius: 2,
                  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                  backdropFilter: 'blur(10px)', border: '1px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                })}
              >
                <Box
                  component="img" src={tech.icon} alt={tech.name}
                  sx={{ width: 40, height: 40, objectFit: 'contain', mb: 0.5, }}
                />
                <Typography variant="caption" sx={{ textAlign: 'center', fontWeight: 500, fontSize: '0.7rem' }}>
                  {tech.name}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Typography gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }} >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

{/* desktop layout */}
export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];
  const currentItems = techStackData[selectedFeature.category as keyof typeof techStackData];

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 2 }} >

      {/* right side */}
      <div>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 2, height: '100%' }} >
          {items.map(({ icon, title, description }, index) => (
            <Box
              key={index} component={Button} onClick={() => handleItemClick(index)}
              sx={[ (theme) => ({ p: 2, height: '100%', width: '100%', '&:hover': { backgroundColor: (theme.vars || theme).palette.action.hover, }, }), selectedItemIndex === index && { backgroundColor: 'action.selected', }, ]}
            >
              <Box
                sx={[
                  { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 1, textAlign: 'left', textTransform: 'none', color: 'text.secondary', },
                  selectedItemIndex === index && { color: 'text.primary', },
                ]}
              >
                {icon}
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        
        <MobileLayout selectedItemIndex={selectedItemIndex} handleItemClick={handleItemClick} selectedFeature={selectedFeature} />
      </div>

      {/* left side */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: { xs: '100%', md: '70%' }, height: '500px' }} >
        <Card variant="outlined" sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', p: 3 }} >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 'medium', mb: 1 }}>
              {selectedFeature.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {selectedFeature.description}
            </Typography>
          </Box>

          {/* tech stack icons */}
          <Box sx={{ flex: 1, overflow: 'auto', p: 0 }}>
            <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center" sx={{ height: '100%', alignItems: 'center' }} >
              {currentItems.map((tech, index) => (
                <Card 
                  key={index} variant="outlined"
                  sx={(theme) => ({
                    width: 110, height: 110, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4,
                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    borderRadius: 3, backdropFilter: 'blur(10px)', border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(0, 0, 0, 0.08)',
                    '&:hover': { transform: 'translateY(-2px)', transition: 'all 0.2s ease', },
                  })}
                >
                  <Box
                    component="img" src={tech.icon} alt={tech.name}
                    sx={{ width: 50, height: 50, objectFit: 'contain', mb: 1, }}
                  />
                  <Typography variant="caption" sx={{ textAlign: 'center', fontWeight: 600, fontSize: '0.75rem' }}>
                    {tech.name}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Box>
        </Card>
      </Box>

    </Box>
  );
}