import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => (
  <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Typography variant="h2" gutterBottom>
        Vite Starter App
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        A blazing-fast frontend built with Vite and React.
      </Typography>
      <Button
        href="https://github.com/1nc0gn30/Vite-Mui-React-Framer-Motion-Starter-App"
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
      >
        View on GitHub
      </Button>
    </motion.div>
  </Container>
);

export default Hero;

