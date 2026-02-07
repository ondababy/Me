import { motion } from 'framer-motion';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { Code } from '@mui/icons-material';

const TechStack = ({ techStack }) => {
  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools' },
  ];

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
          p: { xs: 3, sm: 4 },
          borderRadius: 0,
          border: '2px solid',
          borderTop: 'none',
          borderColor: '#1a1a1a',
          background: '#ffffff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
          <Code sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Tech Stack
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {categories.map(
            (category, catIndex) =>
              techStack[category.key] && (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    {category.label}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {techStack[category.key]?.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.05 + index * 0.02 }}
                      >
                        <Chip
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'transparent',
                            color: '#1a1a1a',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            border: '1px solid',
                            borderColor: '#1a1a1a',
                            borderRadius: 0,
                            '&:hover': {
                              bgcolor: '#1a1a1a',
                              color: '#ffffff',
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              )
          )}
        </Box>
      </Paper>
    </motion.section>
  );
};

export default TechStack;
