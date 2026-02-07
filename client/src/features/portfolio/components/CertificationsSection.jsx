import { motion } from 'framer-motion';
import { Paper, Typography, Box, Link } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

const CertificationsSection = ({ certifications }) => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <EmojiEvents sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Certifications
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'grey.50',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  <Typography variant="body2" fontWeight={500} color="black">
                    {cert.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {cert.issuer}
                  </Typography>
                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.section>
  );
};

export default CertificationsSection;
