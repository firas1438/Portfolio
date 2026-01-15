import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Education() {

  {/* education */}
  const education = [
    {
      title: 'Software Engineering Degree',
      period: 'Sep 2024 – Jun 2027 (Expected)',
      school: 'Higher Institute of Informatics and Mathematics of Monastir, Tunisia',
      icon: <SchoolIcon />,
    },
    {
      title: 'Preparatory Cycle in Engineering',
      period: 'Sep 2022 – Jun 2024',
      school: 'Higher Institute of Informatics and Mathematics of Monastir, Tunisia',
      icon: <AccountBalanceIcon />,
    },
    {
      title: 'Baccalaureate in Technical Sciences',
      period: 'Sep 2018 – Jun 2022',
      school: 'Hammam Sousse 2 Secondary High School, Tunisia',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Container id="education" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 6, sm: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 4 }, }} >
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: 'center' }} >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Education
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          A summary of my academic background, tracking my educational progress
          from secondary school through to my current university studies.
        </Typography>
      </Box>

      {/* timeline content */}
      <Timeline position="alternate" sx={{ width: '100%' }}>
        {education.map((edu, index) => (
          <TimelineItem key={index} sx={{ minHeight: 140 }}>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#415ce0', color: '#e8e8e8' }}>
                {edu.icon}
              </TimelineDot>
              {index < education.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {edu.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.period}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.school}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
