import { motion } from 'framer-motion';
import { useState } from 'react';
import { Paper, Typography, Box, Avatar, IconButton } from '@mui/material';
import { FormatQuote, ChevronLeft, ChevronRight } from '@mui/icons-material';

const RecommendationsSection = ({ recommendations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

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
          <FormatQuote sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Recommendations
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                lineHeight: 1.7,
                mb: 2,
                minHeight: 80,
              }}
            >
              "{recommendations[currentIndex].text}"
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {recommendations[currentIndex].author.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight={600} color="black">
                  {recommendations[currentIndex].author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {recommendations[currentIndex].role}
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mt: 2,
            }}
          >
            <IconButton size="small" onClick={prev} sx={{ color: 'grey.500' }}>
              <ChevronLeft fontSize="small" />
            </IconButton>
            {recommendations.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: index === currentIndex ? 16 : 6,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
            <IconButton size="small" onClick={next} sx={{ color: 'grey.500' }}>
              <ChevronRight fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </motion.section>
  );
};

export default RecommendationsSection;
