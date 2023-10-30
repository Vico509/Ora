import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="@">
        ora.bibleapi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Footer() {
  return (
    <div className='footer-container'>

      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '10vh',
          }}
        >
          <CssBaseline />

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto'
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">

              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}



