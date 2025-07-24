import {
  Grid,
  Typography,
  Box,
  Container,
  Paper,
  Chip,
  Avatar,
  Tooltip,
  IconButton,
  LinearProgress,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AnimationIcon from '@mui/icons-material/Animation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ReactIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FlashOnIcon fontSize="large" />,
    title: 'Vite Speed',
    chip: 'HMR',
    description: 'Instant reloads with hot module replacement and zero config.',
    color: 'info',
    animation: { scale: [0.8, 1], opacity: [0, 1] },
  },
  {
    icon: <ReactIcon fontSize="large" />,
    title: 'Component Power',
    chip: 'React',
    description: 'Composable UI powered by hooks and functional components.',
    color: 'success',
    animation: { x: [-50, 0], opacity: [0, 1] },
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'MUI Toolkit',
    chip: 'MUI v5+',
    description: 'Showcasing Grid2, Avatar, Chip, Tooltip, and more.',
    color: 'primary',
    animation: { rotate: [0, 360], opacity: [0, 1] },
  },
  {
    icon: <AnimationIcon fontSize="large" />,
    title: 'Framer Motion FX',
    chip: 'Motion',
    description: 'Variants, transitions, viewport triggers, and layout sync.',
    color: 'warning',
    animation: { y: [60, 0], opacity: [0, 1] },
  },
  {
    icon: <DarkModeIcon fontSize="large" />,
    title: 'Dark Mode Native',
    chip: 'UX',
    description: 'Designed from the ground up with dark-first visual fidelity.',
    color: 'secondary',
    animation: { scale: [1.2, 1], opacity: [0, 1] },
  },
  {
    icon: <AutoAwesomeIcon fontSize="large" />,
    title: 'Build Progress Tracker',
    chip: 'Feedback',
    description: 'MUI’s LinearProgress enhanced with animated width sync.',
    color: 'error',
    animation: { opacity: [0, 1], width: ['0%', '100%'] },
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
      bounce: 0.25,
    },
  }),
};

const Features = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 8,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          What’s Inside
        </Typography>

        <Grid container spacing={4}>
          {features.map((feat, index) => (
            <Grid key={index} item size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial="initial"
                whileInView="animate"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                custom={index}
                layout
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    transition: '0.3s ease-in-out',
                    height: '400px',
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${feat.color}.main`,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {feat.icon}
                    </Avatar>
                  </Box>

                  <Typography variant="h6" align="center" gutterBottom>
                    {feat.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {feat.description}
                  </Typography>

                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Tooltip title={`Category: ${feat.chip}`} arrow>
                      <Chip
                        label={feat.chip}
                        color={feat.color}
                        variant="outlined"
                        sx={{ px: 1.5 }}
                      />
                    </Tooltip>
                  </Box>

                  <Box display="flex" justifyContent="center" mt={3}>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <IconButton color={feat.color} size="large">
                        {feat.icon}
                      </IconButton>
                    </motion.div>
                  </Box>

                  {feat.title === 'Build Progress Tracker' && (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                    >
                      <LinearProgress
                        color={feat.color}
                        sx={{ mt: 3, height: 8, borderRadius: 5 }}
                      />
                    </motion.div>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

