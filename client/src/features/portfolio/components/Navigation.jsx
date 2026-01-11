import { motion } from 'framer-motion';
import { Fab, Typography } from '@mui/material';
import { Chat } from '@mui/icons-material';

const Navbar = ({ name }) => {
  return null;
};

const FloatingChat = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 50,
      }}
    >
      {/* <Fab
        variant="extended"
        sx={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
          color: 'white',
          textTransform: 'none',
          px: 3,
          py: 1,
          gap: 1,
          boxShadow: '0 8px 32px rgba(26, 26, 46, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2d2d44 0%, #1a1a2e 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(26, 26, 46, 0.35)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Chat sx={{ fontSize: 20 }} />
        <Typography variant="body2" fontWeight={500}>
          Chat with me
        </Typography>
      </Fab> */}
    </motion.div>
  );
};

export { Navbar, FloatingChat };
