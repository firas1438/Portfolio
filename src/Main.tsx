import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './theme/AppTheme';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {/* navbar */}
      <Navbar />
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
        <Divider />
      {/* footer*/}
      <Footer />
    </AppTheme>
  );
}
