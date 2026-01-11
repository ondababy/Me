import { motion } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

const AboutSection = ({ bio }) => {
  const paragraphs = bio.split('\n\n');

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'black',
          background: '#ffffff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Person sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            About
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'black', lineHeight: 1.7 }}
              >
                {paragraph}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.section>
  );
};

export default AboutSection;
