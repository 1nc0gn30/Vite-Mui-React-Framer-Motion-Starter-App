import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ py: 4, mt: 6, backgroundColor: '#000' }}>
    <Container maxWidth="lg">
      <Typography align="center" color="text.secondary" variant="body2">
        © {new Date().getFullYear()} Neal Frazier. Built with Vite + React + MUI.
      </Typography>
    </Container>
  </Box>
);

export default Footer;

