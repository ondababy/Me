import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { Collections, ChevronLeft, ChevronRight } from '@mui/icons-material';

const GallerySection = ({ gallery }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
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
          p: { xs: 3, sm: 4 },
          borderRadius: 0,
          border: '2px solid',
          borderTop: 'none',
          borderColor: '#1a1a1a',
          background: '#ffffff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Collections sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Gallery
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              }}
              size="small"
            >
              <ChevronLeft />
            </IconButton>
          )}
          {canScrollRight && (
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              }}
              size="small"
            >
              <ChevronRight />
            </IconButton>
          )}

          {/* Gallery Grid */}
          <Box
            ref={scrollRef}
            onScroll={checkScroll}
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              pb: 1,
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            {gallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{ flexShrink: 0, scrollSnapAlign: 'start' }}
              >
                <Box
                  sx={{
                    width: { xs: 200, sm: 240, md: 260 },
                    height: { xs: 150, sm: 180, md: 195 },
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover .overlay': { opacity: 1 },
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 1.5,
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 500 }}>
                      {image.alt}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Paper>
    </motion.section>
  );
};

export default GallerySection;
