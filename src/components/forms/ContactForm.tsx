import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { z } from 'zod'; 
import { AlertColor, SnackbarCloseReason } from '@mui/material';
import ToastMessage from '../ToastMessage';

// define zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  
  // setup the reference and state
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // toast state & handle close
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' as AlertColor });
  const handleCloseToast = (_event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') return;
    setToast((prev) => ({ ...prev, open: false }));
  };

  // setup the submission function
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); 

    if (!form.current) return;

    // get data from form
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    // validate using Zod
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = String(issue.path[0]);
        formattedErrors[fieldName] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setLoading(true);

    // send email using EmailJS
    emailjs.sendForm( 'service_7qb9sdc', 'template_avdzskn', form.current, { publicKey: 'IOHveLFy9ViJ2hjn7' } ).then(
      () => {
        setLoading(false);
        form.current?.reset();
        setToast({ open: true, message: "Message sent successfully!", severity: 'success' });
      },
      (error) => {
        setLoading(false);
        setToast({ open: true, message: "Failed to send message: " + error.text, severity: 'error' });
      }
    );
  };

  // styles for the textfields
  const standardFieldStyles = {
    '& .MuiInput-root': { bgcolor: 'background.paper', borderRadius: 1, px: 1.5, py: 0.5, transition: 'all 0.2s ease-in-out', 
      '&::before, &::after': { display: 'none' }, 
      '&:hover': { bgcolor: alpha('#0c1117', 0.1), },
      '&.Mui-focused': { bgcolor: alpha('#415ce0', 0.02), boxShadow: `0 0 0 1.5px ${'#415ce0'}`, },
      '&.Mui-error': { boxShadow: `0 0 0 1.5px #d32f2f` },
    },
    '& .MuiFormHelperText-root': { ml: 1, mt: 0.5 }
  };

  return (
    <Box component="form" ref={form} onSubmit={sendEmail} noValidate autoComplete="off" 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }} 
    >
      <Grid container spacing={2}>

        {/* name */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Full Name * </Typography>
          <TextField 
            fullWidth name="name" placeholder="e.g. John Doe" variant="standard" sx={standardFieldStyles}
            error={!!errors.name} helperText={errors.name} 
          />
        </Grid>

        {/* email */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Email * </Typography>
          <TextField 
            fullWidth name="email" placeholder="john@example.com" type="email" variant="standard" sx={standardFieldStyles}
            error={!!errors.email} helperText={errors.email} 
          />
        </Grid>
      </Grid>

      <Grid>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Phone </Typography>
        <TextField 
          fullWidth name="phone" placeholder="23 456 789" type="tel" variant="standard" sx={standardFieldStyles}
          error={!!errors.phone} helperText={errors.phone} 
        />
      </Grid>

      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Subject * </Typography>
        <TextField 
          fullWidth name="subject" placeholder="How can I help you?" variant="standard" sx={standardFieldStyles}
          error={!!errors.subject} helperText={errors.subject} 
        />
      </Box>

      <Box>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}> Message * </Typography>
        <TextField 
          fullWidth name="message" variant="standard" multiline rows={4} placeholder="Write your message here..." 
          sx={{ ...standardFieldStyles, '& .MuiInput-root': { ...standardFieldStyles['& .MuiInput-root'], py: 1.5 } }}
          error={!!errors.message} helperText={errors.message} 
        />
      </Box>

      <Button type="submit" size="large" fullWidth disabled={loading} startIcon={<SendIcon/>}
        sx={{ fontSize: '0.8rem', py: 1.5, mt: 1, bgcolor: 'background.paper', color: 'text.primary',
          '&:hover': { bgcolor: alpha('#0c1117', 0.05) } }}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {/* toast message */}
      <ToastMessage open={toast.open} message={toast.message} severity={toast.severity} handleClose={handleCloseToast} />

    </Box>
  );
}