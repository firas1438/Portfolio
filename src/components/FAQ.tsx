import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Title from './Title';
import MotionWrapper from './ui/MotionWrapper';

// faq list
const faqs = [
  {
    question: "What is your current academic background?",
    answer: "I am currently an Engineering Student at the Higher Institute of Informatics and Mathematics of Monastir (ISIMM), where I focus on building a strong foundation in Computer Science and Software Engineering."
  },
  {
    question: "How do I contact you for a project?",
    answer: "You can reach me via the contact form on this website or directly through the email provided in the footer."
  },
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in full-stack web development. I also enjoy integrating AI technologies, and experimenting with modern frameworks and tools."
  },
  {
    question: "Are you open to freelance or internship opportunities?",
    answer: "Yes! I am actively seeking internships, freelance projects, and open-source collaborations where I can contribute, learn, and grow alongside other developers."
  },
  {
    question: "Can I see examples of your work or projects?",
    answer: "Yes! You can view my completed projects and ongoing work directly on my portfolio or my GitHub profile provided down below."
  }
];


export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded( isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel) );
  };

  return (
    <Container id="faq" sx={{ pt: { xs: 8, sm: 12 }, pb: { xs: 8, sm: 16 }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 3, sm: 6 } }}>
      
      {/* header */}
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { xs:'center' }, }} >
        <Title
            title="FAQ"
            heading="Frequently Asked Questions"
            description="Find answers to common questions about my skills, experience, and availability."
        />
      </Box>

      {/* content */}
      <MotionWrapper variant='slideUp' delay={0.3}>
        <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} >
          <Box sx={{ width: '100%' }}>
            {faqs.map((faq, index) => {
              const panelId = `panel${index + 1}`;
              return (
                <Accordion key={panelId} expanded={expanded.includes(panelId)} onChange={handleChange(panelId)} >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${panelId}-header`}>
                    <Typography component="span" variant="subtitle2">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Grid>
      </MotionWrapper>

    </Container>
  );
}