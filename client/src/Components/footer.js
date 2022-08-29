import * as React from 'react';
import { Box ,Typography, Link,Container  } from '@mui/material';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  function Footer() {
  
    return (
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, marginTop:'200px' }}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </Box>
    );
  }
  

  export default Footer;