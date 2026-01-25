import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {/* navbar */}
      <AppAppBar />
      {/* body */}
      <Hero />
      <Divider />
      <div className='p-4 sm:p-0'>
        <Education />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Achievements />
        <Divider />
        <FAQ />
        <Divider />
        <Contact />
      </div>
      {/* footer*/}
      <Divider />
      <Footer />
    </AppTheme>
  );
}
