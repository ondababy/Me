import { motion } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

const ExperienceTimeline = ({ experience }) => {
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
          <WorkOutline sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Experience
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                  pb: index < experience.length - 1 ? 2 : 0,
                  borderBottom: index < experience.length - 1 ? '1px solid' : 'none',
                  borderColor: 'black',
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color="black"
                    sx={{ lineHeight: 1.4 }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {exp.company}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ flexShrink: 0 }}
                >
                  {exp.year}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.section>
  );
};

export default ExperienceTimeline;
