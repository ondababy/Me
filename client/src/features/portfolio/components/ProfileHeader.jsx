import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Avatar, Chip, Box, Typography, Paper, Tooltip, Badge } from '@mui/material';
import { Verified, AutoAwesome } from '@mui/icons-material';

const ProfileHeader = ({ data }) => {
  const { personal, badges } = data;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'black',
          background: '#ffffff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 3, sm: 4 },
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Tooltip title="Available for opportunities" arrow>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: '#10b981',
                      borderRadius: '50%',
                      border: '3px solid white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AutoAwesome sx={{ fontSize: 12, color: 'white' }} />
                  </Box>
                </Tooltip>
              }
            >
              <Avatar
                src={personal.avatar}
                alt={personal.name}
                sx={{
                  width: { xs: 100, sm: 120, md: 140 },
                  height: { xs: 120, sm: 150, md: 170 },
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '3px solid',
                  borderColor: 'black',
                }}
                variant="rounded"
              />
            </Badge>
          </motion.div>

          {/* Info */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', sm: 'left' },
              minWidth: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Name with verification */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    color: 'grey.900',
                  }}
                >
                  {personal.name}
                </Typography>
                <Tooltip title="Verified Profile" arrow>
                  <Verified sx={{ fontSize: 22, color: '#3b82f6' }} />
                </Tooltip>
              </Box>

              {/* Location */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  gap: 0.5,
                  mb: 1.5,
                }}
              >
                <MapPin size={14} color="#64748b" />
                <Typography variant="body2" color="text.secondary">
                  {personal.location}
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 2.5,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                }}
              >
                {personal.title}
              </Typography>

              {/* Badges */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                }}
              >
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Chip
                      label={badge.text}
                      size="small"
                      sx={{
                        background:
                          badge.color === 'success'
                            ? 'linear-gradient(135deg, #10b981, #059669)'
                            : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        height: 28,
                        '& .MuiChip-label': { px: 1.5 },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Paper>
    </motion.section>
  );
};

export default ProfileHeader;
