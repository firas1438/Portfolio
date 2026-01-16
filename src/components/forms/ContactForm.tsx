import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export default function ContactForm() {

  const standardFieldStyles = {
    '& .MuiInput-root': { bgcolor: alpha('#415ce0', 0.04), borderRadius: 1.5, px: 1.5, py: 0.5, transition: 'all 0.2s ease-in-out',
      '&::before, &::after': { display: 'none' }, '&:hover': { bgcolor: alpha('#415ce0', 0.08), },
      '&.Mui-focused': { bgcolor: alpha('#415ce0', 0.02), boxShadow: `0 0 0 2px ${'#415ce0'}`, },
    },
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }} >
      
      {/* name & email */}
      <Grid container spacing={2}>
        {/* name */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Full Name * </Typography>
          <TextField fullWidth placeholder="e.g. John Doe" variant="standard" sx={standardFieldStyles} />
        </Grid>
        {/* email*/}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Email * </Typography>
          <TextField fullWidth placeholder="john@example.com" type="email" variant="standard" sx={standardFieldStyles} />
        </Grid>
      </Grid>

      {/* phone */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Phone </Typography>
        <TextField fullWidth placeholder="+216 12 345 678" type="tel" variant="standard" sx={standardFieldStyles} />
      </Box>

      {/* subject */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Subject * </Typography>
        <TextField fullWidth placeholder="How can I help you?" variant="standard" sx={standardFieldStyles} />
      </Box>

      {/* message */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Message * </Typography>
        <TextField fullWidth placeholder="Write your message here..." variant="standard" multiline rows={4}
          sx={{ ...standardFieldStyles, '& .MuiInput-root': { ...standardFieldStyles['& .MuiInput-root'], py: 1.5 } }}
        />
      </Box>

      {/* submit button */}
      <Button type="submit" size="large" fullWidth sx={{fontSize:'0.8rem', py: 1.5, mt:1, bgcolor: alpha('#415ce0', 0.05)}} >
        Send Message
      </Button>

    </Box>
  );
}