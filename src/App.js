import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import HeaderPart from './components/HeaderPart';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <HeaderPart />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
