import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactForm from '../forms/ContactForm';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { alpha } from '@mui/material/styles';
import Title from '../Title';
import MotionWrapper from '../ui/MotionWrapper';

export default function Contact() {

  return (
    <Container id="contact" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 5} }} >
      
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs: 'center' } }}>
        <Title
            title="Contact"
            heading="Get In Touch"
            description="Feel free to reach out for any collaborations, inquiries or just a friendly hello!"
        />
      </Box>

      {/* content */}
      <Grid container spacing={3} sx={{ width: '100%', justifyContent: 'center', alignItems: 'stretch' }} >
        {/* column 1 */}
        <Grid component={MotionWrapper} variant='slideRight' delay={0.3} size={{ xs: 12, sm: 7 }} sx={{ display: 'flex', border: '1px solid', borderColor: alpha('#415ce0', 0.06), borderRadius: 3 }}>
          <Box sx={{ flex: 1, p: 4, border: '1px solid', borderColor: 'background.paper', borderRadius: 3, bgcolor: 'transparent' }} >
            {/* header */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#415ce0' }}>
                Send Me a Message
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I&rsquo;ll try to respond within 24 hours.
              </Typography>
            </Box>
            {/* form */}
            <ContactForm />
          </Box>
        </Grid>
        {/* column 2 */}
        <Grid component={MotionWrapper} variant='slideLeft' delay={0.3} size={{ xs: 12, sm: 5 }} sx={{ display: 'flex', border: '1px solid', borderColor: alpha('#415ce0', 0.06), borderRadius: 3 }}>
          <Box sx={{ flex: 1, p: 4, border: '1px solid', borderColor: 'background.paper', borderRadius: 3, bgcolor: 'transparent', boxShadow: 'none' }} >
            {/* header */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#415ce0' }}>
                Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Connect with me directly
              </Typography>
            </Box>
            {/* additional info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[
                { icon: <MailOutlineIcon fontSize="small" />, label: 'Email', value: 'benalifiras1438@gmail.com' },
                { icon: <PhoneIphoneIcon fontSize="small" />, label: 'Phone', value: '+216 22 047 988' },
                { icon: <LocationOnOutlinedIcon fontSize="small" />, label: 'Location', value: 'Tunisia, 4000' },
                { icon: <LinkedInIcon fontSize="small" />, label: 'LinkedIn', value: 'linkedin.com/in/firasbenali/' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ p: 1.2, borderRadius: '12px', bgcolor: alpha('#415ce0', 0.12), color: '#415ce0', display: 'flex' }} >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ display: 'block', fontWeight: 700, color: 'text.disabled', textTransform: 'uppercase' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} sx={{ color: 'text.primary' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Container>
  );
}