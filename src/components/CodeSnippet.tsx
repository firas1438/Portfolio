import { Box, Paper, Typography, Stack, useTheme } from '@mui/material';

const CodeSnippet = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ width: '100%', maxWidth: 450, perspective: '1000px' }}>
      <Paper elevation={0}
        sx={{
          bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, p: 3, transformStyle: 'preserve-3d',
          boxShadow: isDark ? '0 0 18px rgba(255,255,255,0.04)' : '0 0 18px rgba(0,0,0,0.05)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
          '&:hover': {
            transform: 'rotateX(3deg) rotateY(-3deg)',
            borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
            boxShadow: isDark ? '0 12px 40px rgba(255,255,255,0.08)' : '0 12px 40px rgba(0,0,0,0.12)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Stack direction="row" spacing={1}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.disabled', fontFamily: 'monospace' }}>intro.js</Typography>
        </Box>

        <Box sx={{ fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: 1.8 }}>
          <Typography sx={{ color: '#9ca3af', mb: 1, fontStyle: 'italic' }}>{'// Introduction'}</Typography>

          <Box>
            <Box component="span" sx={{ color: '#f472b6' }}>const</Box>{' '}
            <Box component="span" sx={{ color: '#60a5fa' }}>about</Box>{' '}
            <Box component="span" sx={{ color: 'text.secondary' }}>=</Box>{' '}
            <Box component="span" sx={{ color: '#60a5fa' }}>{'{'}</Box>
          </Box>

          {[
            { key: 'name', value: "'Firas Ben Ali'" },
            { key: 'education', value: "'Software Engineering'" },
            { key: 'stack', value: "['MERN', 'Python', 'React Native']" },
            { key: 'learning', value: "['AI Integration', 'DevOps']" },
            { key: 'seeking', value: "'Internships & Freelance'" },
            { key: 'languages', value: "'English, French, Arabic'" },
          ].map((item, i) => (
            <Box key={i} sx={{ pl: 3 }}>
              <Box component="span" sx={{ color: '#fb923c' }}>{item.key}</Box>
              <Box component="span" sx={{ color: 'text.secondary', mx: 0.5 }}>:</Box>
              <Box component="span" sx={{ color: '#4ade80' }}>{item.value}</Box>
              {i < 3 && <Box component="span" sx={{ color: 'text.secondary' }}>,</Box>}
            </Box>
          ))}

          <Box>
            <Box component="span" sx={{ color: '#60a5fa' }}>{'}'}</Box>
            <Box component="span" sx={{ color: 'text.secondary' }}>;</Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CodeSnippet;
