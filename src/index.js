import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Projects from './topbar/Projects';
import Topbar from './topbar/Topbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{
      border:3,
      margin:0.5,
      padding:4,
      borderColor:'#FCAE1E'      
    }}>
    <Topbar/>
    <Projects/>
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

