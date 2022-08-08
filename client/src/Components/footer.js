import * as React from 'react';
import { Box ,CssBaseline ,Typography, Link,Container  } from '@material-ui/core';

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
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          {/* <Typography variant="h6" align="center" gutterBottom>
            Copyright
          </Typography> */}
          {/* <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            'copyright footer'
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    );
  }
  

  export default Footer;