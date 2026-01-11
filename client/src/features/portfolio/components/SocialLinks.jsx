import { motion } from 'framer-motion';
import { Paper, Typography, Box, Link } from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Twitter,
  Instagram,
  Email,
  Phone,
  Groups,
  Link as LinkIcon,
  Mic,
  CalendarMonth,
  OpenInNew,
} from '@mui/icons-material';

const iconMap = {
  linkedin: LinkedIn,
  github: GitHub,
  twitter: Twitter,
  instagram: Instagram,
  mail: Email,
  phone: Phone,
};

const SocialLinks = ({ data }) => {
  const { socials, memberships, speaking, personal, contact } = data;

  const processedMemberships = (memberships || [])
    .filter((m) => (m.name || '').toLowerCase().trim() !== 'tup taguig it community')
    .map((m) =>
      (m.name || '').toLowerCase().trim() === 'mtics organization'
        ? { ...m, url: 'https://www.facebook.com/mticsofficial' }
        : m
    );

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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, sm: 4 },
          }}
        >
          {/* Memberships */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Groups sx={{ fontSize: 18, color: 'grey.500' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Member of
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {processedMemberships.map((membership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={membership.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 1.5,
                      borderRadius: 1.5,
                      color: 'black',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'grey.50',
                        '& .linkIcon': { opacity: 1 },
                      },
                    }}
                  >
                    <Typography variant="body2">{membership.name}</Typography>
                    <OpenInNew
                      className="linkIcon"
                      sx={{ fontSize: 14, opacity: 0, transition: 'opacity 0.2s' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Social Links */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LinkIcon sx={{ fontSize: 18, color: 'grey.500' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Connect
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {socials.filter(social => social.icon !== 'mail').map((social, index) => {
                const Icon = iconMap[social.icon] || LinkIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 1.5,
                        color: 'black',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: 'grey.50' },
                      }}
                    >
                      <Icon sx={{ fontSize: 18, color: '#6366f1' }} />
                      <Typography variant="body2">{social.platform}</Typography>
                    </Link>
                  </motion.div>
                );
              })}
            </Box>
          </Box>

          {/* Speaking */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Mic sx={{ fontSize: 18, color: 'grey.500' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Speaking
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'grey.50',
              }}
            >
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, display: 'block' }}>
                {speaking.available
                  ? 'Available for speaking at events:'
                  : 'Currently not available'}
              </Typography>
              {speaking.available && (
                <>
                  <Box component="ul" sx={{ pl: 0, m: 0, mb: 1.5, listStyle: 'none' }}>
                    {speaking.topics.map((topic, index) => (
                      <Box
                        component="li"
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            bgcolor: '#6366f1',
                          }}
                        />
                        <Typography variant="caption" color="black">
                          {topic}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Email sx={{ fontSize: 18, color: 'grey.500' }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Contact
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.50' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Email sx={{ fontSize: 16, color: '#6366f1' }} />
                  <Typography variant="caption" fontWeight={600} color="black">
                    Email
                  </Typography>
                </Box>
                <Link
                  href={`mailto:${personal.email}`}
                  underline="hover"
                  sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
                >
                  {personal.email}
                </Link>
              </Box>

              {personal.phone && (
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.50' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Phone sx={{ fontSize: 16, color: '#6366f1' }} />
                    <Typography variant="caption" fontWeight={600} color="grey.800">
                      Phone
                    </Typography>
                  </Box>
                  <Link
                    href={`tel:${personal.phone}`}
                    underline="hover"
                    sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
                  >
                    {personal.phone}
                  </Link>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
    </motion.section>
  );
};

export default SocialLinks;
