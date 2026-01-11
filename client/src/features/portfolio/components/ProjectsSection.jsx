import { motion } from 'framer-motion';
import { Paper, Typography, Box, Card, CardContent, Chip, IconButton, Link } from '@mui/material';
import { FolderOpen, OpenInNew } from '@mui/icons-material';

const ProjectsSection = ({ projects }) => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
          <FolderOpen sx={{ fontSize: 20, color: 'grey.500' }} />
          <Typography variant="subtitle1" fontWeight={600} color="black">
            Projects
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" underline="none">
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'black',
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'black',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="black"
                      sx={{ flex: 1 }}
                    >
                      {project.name}
                    </Typography>
                    <OpenInNew
                      sx={{ fontSize: 16, color: 'grey.400', flexShrink: 0 }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.5,
                    }}
                  >
                    {project.description}
                  </Typography>
                  {project.tech && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.5 }}>
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: '0.7rem',
                            bgcolor: 'grey.100',
                            color: 'grey.600',
                          }}
                        />
                      ))}
                      {project.tech.length > 3 && (
                        <Chip
                          label={`+${project.tech.length - 3}`}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: '0.7rem',
                            bgcolor: 'grey.100',
                            color: 'grey.500',
                          }}
                        />
                      )}
                    </Box>
                  )}
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.section>
  );
};

export default ProjectsSection;
