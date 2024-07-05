import React from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Container maxWidth="sm" sx={{ flexGrow: 1, mt: 5 }}>
        <TaskList />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
